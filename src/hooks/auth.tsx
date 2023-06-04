import React, {
  createContext,
  useContext,
  useEffect,
  ReactNode,
  useState,
} from 'react'
import { api } from '../services/api'
import { UserInfo } from '../services/types'

interface AuthContextValue {
  isUserAuthenticated: boolean
  userInfo?: UserInfo
  checkUser: () => void
}

const initialAuthContextValue: AuthContextValue = {
  isUserAuthenticated: false,
  checkUser: () => {},
}

const AuthContext = createContext<AuthContextValue>(initialAuthContextValue)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>()

  async function checkIfUserAuthenticated(): Promise<void> {
    try {
      const response = await api.get('/me')

      setIsUserAuthenticated(true)
      setUserInfo(response.data)
    } catch (error) {
      setIsUserAuthenticated(false)
    }
  }

  useEffect(() => {
    checkIfUserAuthenticated()
  }, [])

  const authContextValue: AuthContextValue = {
    isUserAuthenticated,
    userInfo,
    checkUser: checkIfUserAuthenticated,
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser usado dentro do AuthProvider')
  }
  return context
}
