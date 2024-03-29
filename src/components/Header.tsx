import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { Login } from './Login'
import { useAuth } from '../hooks/auth'
import { useEffect } from 'react'

export function Header() {
  const { isUserAuthenticated } = useAuth()
  useEffect(() => {})

  return (
    <div className="flex justify-center px-11 py-3 text-textHeader sm:justify-between sm:py-6">
      <div>
        <Link to={'/'}>
          <img className="w-40" src={Logo} alt="logo image" />
        </Link>
      </div>
      <div className="max-sm:hidden">
        {isUserAuthenticated ? (
          <>
            <Link
              to="/settings"
              className="font-gotham text-2xl font-bold text-white"
            >
              Conta
            </Link>
          </>
        ) : (
          <Login buttonText="Login" />
        )}
      </div>
    </div>
  )
}

/*
 */
