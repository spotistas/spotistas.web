import Logo from '../assets/logo.png'

export function Footer() {
    return(
        <div className='bg-bgFooter text-white px-6 pt-11 pb-5'>
            <div>
                <img
                    className='w-36'
                    src={Logo} 
                    alt="logo image" 
                />
            </div>
            <div className='flex justify-between font-poppins px-2'>            
                <div className='font-medium w-1/4'>
                    <p className='opacity-50 mt-7  text-sm'>
                        Dados de música, imagens de artistas, capas de álbuns e prévias de músicas são fornecidos pelo Spotify.
                    </p>
                    <p className='opacity-50 mt-3 text-sm'>
                        spotistas não é afiliado, associado, autorizado, endossado por, ou de qualquer forma oficialmente conectado com o Spotify. Spotify é uma marca comercial da Spotify AB.
                    </p>
                </div>
                <div className='font-bold text-right'>
                    <p>
                        Política de Privacidade
                    </p>
                    <p>
                        Contato
                    </p>
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <span className='font-light opacity-50 text-sm'>
                    © 2023-Spotistas 
                </span>
            </div>
        </div>  
    )
}