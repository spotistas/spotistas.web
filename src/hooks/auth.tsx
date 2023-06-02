import {
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
}

const initialAuthContextValue: AuthContextValue = {
  isUserAuthenticated: false,
}

const AuthContext = createContext<AuthContextValue>(initialAuthContextValue)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>()
  console.log(isUserAuthenticated)

  async function checkIfUserAuthenticated(): Promise<void> {
    try {
      const response = await api.get('/me')
      console.log(response)
      if (response.status !== 200) {
        setIsUserAuthenticated(false)
      } else {
        setIsUserAuthenticated(true)
        setUserInfo(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfUserAuthenticated()
  }, [])

  return (
    <AuthContext.Provider value={{ isUserAuthenticated, userInfo }}>
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
