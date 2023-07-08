import { Routes } from './routes'
import './styles/global.css'
import { AuthProvider } from './hooks/auth'

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App
