import Logo from '../assets/logo.png'
import { Login } from './Login'

export function Header() {
    return(
        <div className='flex sm:justify-between justify-center px-11 sm:py-6 py-3 text-textHeader'> 
            <div>
                <img
                    className='w-40'
                    src={Logo} 
                    alt="logo image" 
                />
            </div>
            <div className='max-sm:hidden'>
            <Login
            buttonText="Login"
            />
            </div>
        </div>
    )
}