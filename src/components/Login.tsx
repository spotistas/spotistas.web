import { api } from '../services/api'

interface Props extends HTMLButtonElement {
  buttonText: string
}

export function Login({ buttonText }: Props) {
  async function handleLogin() {
    const response = await api.get('/oauth')
    console.log(response)
  }
  return (
    <button
      className="bg-green md:text-base text-sm font-poppins font-medium md:px-12 md:py-4 px-10 py-3 rounded-full text-textHeader hover:brightness-105"
      onClick={handleLogin}
    >
      {buttonText}
    </button>
  )
}
