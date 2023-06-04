import { Routes } from './routes'
import './styles/global.css'
import { AuthProvider } from './hooks/auth'
import { useLayoutEffect } from 'react'

function App() {
  useLayoutEffect(() => {
    console.log('oi')
  }, [])
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App
