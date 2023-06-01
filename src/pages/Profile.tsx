import { Header } from '../components/Header'
import { useEffect, useState } from 'react'
import {
  getUserInfo,
  getUserTopArtists,
  getUserTopGenres,
  getUserTopTracks,
} from '../services/api'
import { TopTrendingTypes, UserInfo } from '../services/types'
import { CardProfile } from '../components/CardProfile'
import { Loading } from '../components/Loading'
import { SectionProfile } from '../components/SectionProfile'

export function Me() {
  const [userTopTracks, setUserTopTracks] = useState<TopTrendingTypes>()
  const [userInfo, setUserInfo] = useState<UserInfo>()
  const [userArtists, setUserArtists] = useState()
  const [userTopGenres, setUserTopGenres] = useState()
  const [loading, setLoading] = useState(true)

  async function getAllPageData(): Promise<void> {
    setLoading(true)
    const responseUserTracks = await getUserTopTracks()
    const responseUserInfo = await getUserInfo()
    const responseUserArtists = await getUserTopArtists()
    const responseUserGenres = await getUserTopGenres()

    setUserTopGenres(responseUserGenres)
    setUserArtists(responseUserArtists)
    setUserInfo(responseUserInfo)
    setUserTopTracks(responseUserTracks)
    setLoading(false)
  }
  useEffect(() => {
    getAllPageData()
  }, [])

  return (
    <>
      {loading ? (
        <div className="h-screen overflow-hidden">
          <Loading />
        </div>
      ) : (
        <>
          <div className="relative h-[258px] bg-bgFooter md:h-[358px]">
            <Header />

            <div className="absolute bottom-0 flex translate-y-[20%] items-center gap-4 px-4 text-white md:translate-y-[30%] md:px-11">
              <img
                src={userInfo?.image}
                alt="Imagem do usuário"
                className="w-28 rounded-full border-4 border-green md:w-[267px] md:border-8"
              />
              <h1 className="font-gotham text-2xl font-bold md:text-6xl">
                {userInfo?.name}
              </h1>
            </div>
          </div>

          <main className="my-20 flex flex-col gap-20 px-4 text-white md:my-36 md:px-11">
            {userTopTracks && (
              <>
                <SectionProfile title="Top Músicas">
                  <CardProfile cardData={userTopTracks} />
                </SectionProfile>
                <SectionProfile title="Top Artistas">
                  <CardProfile cardData={userArtists} />
                </SectionProfile>
                <SectionProfile title="Top Gêneros">
                  <CardProfile cardData={userTopGenres} />
                </SectionProfile>
              </>
            )}
          </main>
        </>
      )}
    </>
  )
}
