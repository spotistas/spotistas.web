import {
  createContext,
  useContext,
  useEffect,
  ReactNode,
  useState,
} from 'react'
import { api } from '../services/api'

const AuthContext = createContext({})

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)
  async function checkIfUserAuthenticated(): Promise<void> {
    try {
      const response = await api.get('/me')
      if (response.status !== 200) {
        setIsUserAuthenticated(false)
      }
      setIsUserAuthenticated(true)
    } catch (error) {
      setIsUserAuthenticated(false)
    }
  }

  useEffect(() => {
    checkIfUserAuthenticated()
  }, [])

  return (
    <AuthContext.Provider value={isUserAuthenticated}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
