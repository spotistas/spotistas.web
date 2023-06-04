import { Header } from '../components/Header'
import { SummaryCard } from '../components/SummaryCard'

export function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-16 px-11 py-28">
        <SummaryCard
          key="5"
          title="Política de Privacidade"
          description="Bem-vindo(a) à nossa plataforma de dados do Spotify. A privacidade de nossos usuários é extremamente importante para nós e estamos comprometidos em proteger suas informações pessoais. Esta política de privacidade explica como coletamos, usamos e compartilhamos seus dados quando você usa nossa plataforma."
        />
        <SummaryCard
          key="4"
          title="Coleta de Informações"
          description="Ao acessar nossa plataforma, coletamos informações sobre sua conta do Spotify, incluindo suas músicas favoritas, artistas mais tocados, histórico de reprodução e outras estatísticas relacionadas ao seu uso do Spotify. Essas informações são coletadas por meio da API do Spotify e são usadas apenas para fornecer a você estatísticas e informações relevantes sobre suas músicas."
        />
        <SummaryCard
          key="3"
          title="Uso de Informações"
          description="As informações que coletamos são usadas apenas para fornecer serviços e recursos relacionados à nossa plataforma. Não compartilhamos suas informações com terceiros sem o seu consentimento prévio, a menos que exigido por lei. Usamos medidas de segurança para proteger suas informações contra acesso não autorizado, uso ou divulgação."
        />
        <SummaryCard
          key="2"
          title="Alterações na Política de Privacidade"
          description="Podemos atualizar esta política de privacidade de tempos em tempos. Quaisquer alterações serão publicadas em nosso site. Encorajamos você a revisar periodicamente esta política de privacidade para estar ciente de como estamos protegendo suas informações pessoais."
        />
        <SummaryCard
          key="1"
          title="Contate-nos"
          description={`Se você tiver alguma dúvida ou preocupação sobre nossa política de privacidade, entre em contato conosco pelo endereço de e-mail fornecido em nosso site.
          ${'\n '}
          Esperamos que esta política de privacidade forneça a você informações claras sobre como coletamos e usamos seus dados. Se você tiver alguma dúvida ou preocupação adicional, não hesite em entrar em contato conosco. Obrigado por escolher nossa plataforma de dados do Spotify.`}
        />
      </main>
    </>
  )
}
