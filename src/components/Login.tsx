import { api } from '../services/api'

interface Props {
  buttonText: string
}

export function Login({ buttonText }: Props) {
  async function handleLogin() {
    const response = await api.get('/oauth')
    console.log(response)
  }
  return (
    <button
      className="rounded-full bg-green px-10 py-3 font-poppins text-sm font-medium text-textHeader hover:brightness-105 md:px-12 md:py-4 md:text-base"
      onClick={handleLogin}
    >
      {buttonText}
    </button>
  )
}
