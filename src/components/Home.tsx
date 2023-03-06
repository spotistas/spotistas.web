import { Header } from "./Header";
import { Login } from "./Login";

export function Home() {
    return(
        <div>
            <div className="bg-bgHome sm:bg-cover bg-no-repeat h-screen">
                <Header/>
                <div className='flex'>
                <div className="text-white text-center mx-auto w-[1000px]">
                    <h1 
                    className="text-6xl font-gotham font-bold mt-[400px] mx-10">
                        Veja a sua história através das musicas que você escuta
                    </h1>
                    <p
                    className="text-2xl font-poppins font-medium mt-16 mx-10 mb-20"
                    >
                        Explore estatísticas detalhadas, compare seus gostos com os de seus amigos e descubra novos artistas. Transforme seus dados em diversão e comece a explorar agora mesmo!
                    </p>
                    <div className='pb-20'>
                        <Login
                        buttonText="Entrar com Spotify"/>
                    </div>
                </div>
                </div>
            </div>
            <div className='bg-black'>
            </div>
        </div>
    )
}