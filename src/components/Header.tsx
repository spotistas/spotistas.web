import Logo from '../assets/logo.png'
import { Login } from './Login'

export function Header() {
    return(
        <div className='flex justify-between px-11 py-6 text-textHeader'> 
            <div>
                <img
                    className='w-40'
                    src={Logo} 
                    alt="logo image" 
                />
            </div>
            <Login
            buttonText="Login"
            />
        </div>
    )
}