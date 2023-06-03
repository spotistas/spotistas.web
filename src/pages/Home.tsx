import { useEffect, useState } from 'react'
import { CardSectionHorizontal } from '../components/CardSectionHorizontal'
import { DayMusic } from '../components/DayMusic'
import { Header } from '../components/Header'
import { Login } from '../components/Login'
import { MonthArtist } from '../components/MonthArtist'
import { OurPlaylists } from '../components/OurPlaylists'
import { TopTrending } from '../components/TopTrending'
import { getOurPlaylists, getTopTrending } from '../services/api'
import { Playlist, TopTrendingTypes } from '../services/types'

export function Home() {
  const [ourPlaylistsData, setOurPlaylistsData] = useState<Playlist[]>()
  const [topTrendingSongs, setTopTrendingSongs] = useState<
    TopTrendingTypes[] | undefined
  >()

  async function getPageData(): Promise<void> {
    const playlistsDataResponse = await getOurPlaylists()
    const topBrasilDataResponse = await getTopTrending(10)
    setTopTrendingSongs(topBrasilDataResponse)
    setOurPlaylistsData(playlistsDataResponse)
  }

  useEffect(() => {
    getPageData()
  }, [])
  return (
    <div>
      <div className="bg-homeMobile bg-cover bg-center bg-no-repeat sm:bg-home">
        <div className="bg-gradientHome">
          <Header />
          <div className="flex">
            <div className="mx-auto w-[1000px] text-center text-white">
              <h1 className="mx-10 mt-56 font-gotham  text-xl font-bold sm:mt-44 sm:text-4xl 2xl:mt-[400px] 2xl:text-6xl">
                Veja a sua história através das musicas que você escuta
              </h1>
              <p className="my-8 mx-10 font-poppins text-xs font-medium opacity-50 sm:text-base 2xl:my-16 2xl:text-2xl">
                Explore estatísticas detalhadas, compare seus gostos com os de
                seus amigos e descubra novos artistas. Transforme seus dados em
                diversão e comece a explorar agora mesmo!
              </p>
              <div className="pb-10 sm:pb-24">
                <Login buttonText="Entrar com Spotify" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-10 px-4 py-11 md:mt-40 lg:max-w-[1440px]">
        <section className=" flex w-full flex-col justify-between gap-7 sm:flex-row">
          <MonthArtist />
          <DayMusic />
        </section>
        <section className="w-full space-y-7">
          <CardSectionHorizontal>
            <TopTrending data={topTrendingSongs} />
          </CardSectionHorizontal>
          <CardSectionHorizontal>
            {ourPlaylistsData && <OurPlaylists data={ourPlaylistsData} />}
          </CardSectionHorizontal>
        </section>
      </main>
    </div>
  )
}
