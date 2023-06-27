import { useEffect, useState } from 'react'
import MusicPlayer from './MusicPlayer'
import { CircleNotch } from '@phosphor-icons/react'
import { getMonthArtist, MonthArtistProps } from '../services/api'

export function MonthArtist() {
  const [monthArtist, setMonthArtist] = useState<MonthArtistProps>()

  const getMonthArtistData = async () => {
    const monthArtistData = await getMonthArtist()
    setMonthArtist(monthArtistData ?? { image: '', name: '', tracks: [] })
  }
  useEffect(() => {
    getMonthArtistData()
  }, [])

  return (
    <div className="2xl:w-[665px] sm:w-[550px] text-white">
      {monthArtist?.image && monthArtist?.name && monthArtist?.tracks ? (
        <div>
          <div
            className="rounded-t-3xl pt-32 md:pb-9 pb-5 md:pl-7 pl-5 bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)), url(${monthArtist.image})`,
            }}
          >
            <p className="font-medium md:text-2xl text-xl">Artista do Mês</p>
            <p className="font-bold md:text-5xl text-4xl">{monthArtist.name}</p>
          </div>
          <div className="bg-gradientGrid rounded-b-3xl pb-11">
            <MusicPlayer songs={monthArtist} />
          </div>
        </div>
      ) : (
        <div className="h-[875px] flex justify-center items-center">
          <CircleNotch
            className="animate-spin text-green"
            size={32}
            weight="bold"
          />
        </div>
      )}
    </div>
  )
}
