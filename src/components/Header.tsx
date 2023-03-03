import Logo from '../assets/logo.svg'

export function Header() {
    return(
        <div className='flex justify-between px-11 py-6'> 
            <img
                className='w-40'
                src={Logo} 
                alt="logo" 
            />
           <button
            className='bg-greenButton text-base font-poppins font-medium px-12 py-4 rounded-full'
            >
                Login
            </button>
        </div>
    )
}