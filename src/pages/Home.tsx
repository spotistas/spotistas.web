import { Header } from "../components/Header";
import { Login } from "../components/Login";
import { MonthArtist } from "../components/MonthArtist";

export function Home() {
	return (
		<div>
			<div className="sm:bg-home bg-homeMobile bg-cover bg-no-repeat bg-center">
				<div className="bg-gradientHome">
					<Header />
					<div className='flex'>
						<div className="text-white text-center mx-auto w-[1000px]">
							<h1
								className="2xl:text-6xl sm:text-4xl text-xl  font-gotham font-bold sm:mt-44 2xl:mt-[400px] mt-56 mx-10">
								Veja a sua história através das musicas que você escuta
							</h1>
							<p
								className="opacity-50 2xl:text-2xl sm:text-base text-xs font-poppins font-medium sm:my-16 my-8 sm:mb-20 mx-10"
							>
								Explore estatísticas detalhadas, compare seus gostos com os de seus amigos e descubra novos artistas. Transforme seus dados em diversão e comece a explorar agora mesmo!
							</p>
							<div className='sm:pb-24 pb-10'>
								<Login
									buttonText="Entrar com Spotify" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mx-10">
				<div className="md:mt-40 mt-10 flex mx-auto md:max-w-[1350px] max-w-[600px] flex-wrap justify-center">
					<div className=" pb-10">
						<MonthArtist/>
					</div>
					<div className="xxl:ml-5 pb-10">

					</div>
				</div>
			</div>
		</div>
	)
}