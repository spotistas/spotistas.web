import { BrowserRouter } from 'react-router-dom'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { Footer } from '../components/Footer'
import { useAuth } from '../hooks/auth'

export function Routes() {
  const { isUserAuthenticated } = useAuth()

  return (
    <BrowserRouter>
      {isUserAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
      <Footer />
    </BrowserRouter>
  )
}
