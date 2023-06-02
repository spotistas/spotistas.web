import { CardSettings } from '../components/CardSettings'
import { Header } from '../components/Header'
import { useAuth } from '../hooks/auth'
import { SpotifyLogo, ShieldCheckered } from '@phosphor-icons/react'

export function Settings() {
  const { userInfo } = useAuth()
  return (
    <div>
      <div className="relative h-[258px] bg-bgFooter md:h-[358px]">
        <Header />

        <div className="absolute bottom-0 flex w-full translate-y-[40%] flex-col items-center gap-4 px-4 text-white md:px-11">
          <img
            src={userInfo?.image}
            alt="Imagem do usuário"
            className="w-28 rounded-full border-4 border-green md:w-[267px] md:border-8"
          />
          <h1 className=" text-center font-gotham text-xl font-bold md:text-6xl">
            Bem vindo, {userInfo?.name}
          </h1>
        </div>
      </div>
      <main className="my-32 flex flex-col gap-16 px-4 md:mt-[262px] md:flex-row md:justify-center md:gap-5">
        <CardSettings
          key={1}
          title="Configurar conta no Spotify"
          buttonTitle="Continuar para Spotify"
          description="Gerencie as configurações da sua conta diretamente no site do Spotify"
          href={
            userInfo?.external_url ||
            'https://www.spotify.com/br-pt/account/privacy/'
          }
          icon={SpotifyLogo}
        />
        <CardSettings
          key={2}
          title="Nossa Política de
          Privacidade"
          buttonTitle="Política de Privacidade"
          description="Veja como utilizamos os seus dados, para lhe fornecer o nosso serviço"
          href="/privacy"
          icon={ShieldCheckered}
        />
      </main>
    </div>
  )
}
