import Logo from '../assets/logo.png'

export function Footer() {
    return(
        <div className='bg-bgFooter text-white px-6 pt-11 pb-5 max-sm:flex max-sm:flex-col'>
            <div className='max-sm:flex max-sm:justify-center'>
                <img
                    className='w-36'
                    src={Logo} 
                    alt="logo image" 
                />
            </div>
            <div className='flex max-sm:flex-col justify-between font-poppins px-2 max-sm:text-center'>            
                <div className='font-medium sm:w-1/2 md:w-1/3 lg:w-1/4'>
                    <p className='opacity-50 mt-3 text-sm'>
                        Dados de música, imagens de artistas, capas de álbuns e prévias de músicas são fornecidos pelo Spotify.
                    </p>
                    <p className='opacity-50 mt-3 text-sm'>
                        spotistas não é afiliado, associado, autorizado, endossado por, ou de qualquer forma oficialmente conectado com o Spotify. Spotify é uma marca comercial da Spotify AB.
                    </p>
                </div>
                <div className='font-bold text-right max-sm:text-center max-sm:mt-5'>
                    <p>
                        Política de Privacidade
                    </p>
                    <p>
                        Contato
                    </p>
                </div>
            </div>
            <div className='flex justify-center mt-5 '>
                <span className='font-light opacity-50 text-sm'>
                    © 2023-Spotistas 
                </span>
            </div>
        </div>  
    )
}