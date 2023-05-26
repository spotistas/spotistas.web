import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { Login } from './Login'
import { useCookies } from 'react-cookie'
export function Header() {
  const [cookie] = useCookies(['@spotistas/token'])
  console.log(cookie)
  return (
    <div className="flex sm:justify-between justify-center px-11 sm:py-6 py-3 text-textHeader">
      <div>
        <Link to={'/'}>
          <img className="w-40" src={Logo} alt="logo image" />
        </Link>
      </div>
      <div className="max-sm:hidden">
        {cookie ? (
          <Login buttonText="Login" />
        ) : (
          <a href="/#" className="text-white font-gotham font-bold text-2xl">
            Conta
          </a>
        )}
      </div>
    </div>
  )
}
