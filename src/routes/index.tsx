import { BrowserRouter } from 'react-router-dom'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'
import { Footer } from '../components/Footer'

export function Routes() {
  const isAuthenticated = false
  return (
    <BrowserRouter>
      {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
      <Footer />
    </BrowserRouter>
  )
}
