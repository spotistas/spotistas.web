import { useEffect, useState } from 'react'
import MusicPlayer from './MusicPlayer'
import { CircleNotch } from '@phosphor-icons/react'
import { getMonthArtist } from '../services/api'
import { MonthArtistProps } from '../services/types'

export function MonthArtist() {
  const [monthArtist, setMonthArtist] = useState<MonthArtistProps>()
  const [indexMusic, setIndexMusic] = useState(-1)
  const [isPlaying, setIsPlaying] = useState(false)
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
            className="rounded-t-3xl bg-cover bg-center bg-no-repeat pt-32 pb-5 pl-5 md:pb-9 md:pl-7"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)), url(${monthArtist.image})`,
            }}
          >
            <p className="text-xl font-medium md:text-2xl">Artista do Mês</p>
            <p className="text-4xl font-bold md:text-5xl">{monthArtist.name}</p>
          </div>
          <div className="bg-gradientGrid rounded-b-3xl pb-11">
            {monthArtist?.tracks.map((track, index) => (
              <div
                key={index}
                className="flex pt-10 pl-4 max-2xl:pr-8  sm:pl-8 2xl:pl-20"
              >
                <div>
                  {track.preview_url?.length > 0 ? (
                    <div className="relative">
                      <img
                        className="m-auto flex h-auto max-h-[50px] w-full max-w-[50px] justify-center rounded-xl sm:max-h-[77px] sm:max-w-[77px]"
                        src={track.image}
                        alt="music album image"
                      />
                      <div
                        className={`z-7 absolute inset-0 bg-center bg-no-repeat`}
                      >
                        <div className="flex pt-10 2xl:pl-20 sm:pl-8  pl-4 max-2xl:pr-8">
                          <div>
                            {track && (
                              <button
                                onClick={() => {
                                  setIndexMusic(index)
                                  setIsPlaying((prevState) =>
                                    index === indexMusic ? !prevState : true,
                                  )
                                }}
                              >
                                {index === indexMusic ? (
                                  <div>
                                    {!isPlaying ? (
                                      <div
                                        className={`z-7 absolute inset-0 bg-center bg-no-repeat hover:bg-play`}
                                      ></div>
                                    ) : (
                                      <div
                                        className={`z-7 absolute inset-0 bg-center bg-no-repeat hover:bg-pause`}
                                      ></div>
                                    )}
                                  </div>
                                ) : (
                                  <div
                                    className={`z-7 absolute inset-0 bg-center bg-no-repeat hover:bg-play`}
                                  ></div>
                                )}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <img
                        className="m-auto flex h-auto max-h-[50px] w-full max-w-[50px] justify-center rounded-xl sm:max-h-[77px] sm:max-w-[77px]"
                        src={track.image}
                        alt="music album image"
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center pl-2 sm:pl-5 ">
                  <p className="text-sm font-bold sm:text-lg 2xl:text-3xl">
                    {track.name}
                  </p>
                  <p className="text-xs font-bold opacity-50 sm:text-base 2xl:text-2xl">
                    {track.album.name}
                  </p>
                </div>
              </div>
            ))}
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
      <MusicPlayer
        songs={monthArtist?.tracks || []}
        index={indexMusic}
        setIndex={setIndexMusic}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  )
}
