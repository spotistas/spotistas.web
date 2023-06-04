import { Header } from '../components/Header'
import { useEffect, useState } from 'react'
import {
  getUserTopArtists,
  getUserTopGenres,
  getUserTopTracks,
} from '../services/api'
import { TopArtistAuth, TopTrendingTypes } from '../services/types'
import { CardProfile } from '../components/CardProfile'
import { Loading } from '../components/Loading'
import { SectionProfile } from '../components/SectionProfile'
import { useAuth } from '../hooks/auth'
interface ProfileData {
  userTopTracks: TopTrendingTypes | null
  userTopArtists: TopArtistAuth[] | null
  userTopGenres: string[] | null
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({
    userTopTracks: null,
    userTopArtists: null,
    userTopGenres: null,
  })
  const [loading, setLoading] = useState(true)
  const { userInfo } = useAuth()

  async function getPageData(): Promise<void> {
    setLoading(true)
    const [userTracks, userArtists, userGenres] = await Promise.all([
      getUserTopTracks(),
      getUserTopArtists(),
      getUserTopGenres(),
    ])

    setProfileData({
      userTopTracks: userTracks,
      userTopArtists: userArtists,
      userTopGenres: userGenres,
    })
    setLoading(false)
  }

  useEffect(() => {
    getPageData()
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
            {profileData && (
              <>
                <SectionProfile title="Top Músicas">
                  <CardProfile cardData={profileData.userTopTracks} />
                </SectionProfile>
                <SectionProfile title="Top Artistas">
                  <CardProfile cardData={profileData.userTopArtists} />
                </SectionProfile>
                <SectionProfile title="Top Gêneros">
                  <CardProfile cardData={profileData.userTopGenres} />
                </SectionProfile>
              </>
            )}
          </main>
        </>
      )}
    </>
  )
}
