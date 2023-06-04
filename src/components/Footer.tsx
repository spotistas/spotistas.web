import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

export function Footer() {
  return (
    <div className="bg-bgFooter px-6 pt-11 pb-5 text-white max-sm:flex max-sm:flex-col">
      <div className="max-sm:flex ">
        <img className="w-36" src={Logo} alt="logo image" />
      </div>
      <div className="flex justify-between px-2 font-poppins max-sm:flex-col">
        <div className="font-medium sm:w-1/2 md:w-1/3 lg:w-1/4">
          <p className="mt-3 text-sm opacity-50">
            Dados de música, imagens de artistas, capas de álbuns e prévias de
            músicas são fornecidos pelo Spotify.
          </p>
          <p className="mt-3 text-sm opacity-50">
            spotistas não é afiliado, associado, autorizado, endossado por, ou
            de qualquer forma oficialmente conectado com o Spotify. Spotify é
            uma marca comercial da Spotify AB.
          </p>
        </div>
        <div className="text-left font-bold max-sm:mt-5 md:text-right">
          <p>
            <Link to={'/privacy'}>Política de Privacidade</Link>
          </p>
          <p>
            <a href="#">Contato</a>
          </p>
        </div>
      </div>
      <div className="mt-5 flex justify-center ">
        <span className="text-sm font-light opacity-50">© 2023-Spotistas</span>
      </div>
    </div>
  )
}
