/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'
import { getTopTrending, TopTrendingTypes } from '../services/api'

interface Props {
  clientWidth: number
}

export function TopTrending({ clientWidth }: Props) {
  const [topTrendingSongs, setTopTrendingSongs] = useState<
    TopTrendingTypes[] | undefined
  >()

  let limit: number
  clientWidth >= 1024 ? (limit = 10) : (limit = 5)

  async function getTopTrendingData(limit: number) {
    const data = await getTopTrending(limit)

    setTopTrendingSongs(data)
  }
  useEffect(() => {
    getTopTrendingData(limit)
  }, [])
  return (
    <div className="w-full flex flex-col items-center justify-center font-gotham text-white rounded-2xl bg-gradientTrending">
      <section className="font-gotham flex flex-col items-center gap-6 mt-16 font-bold text-center">
        <h2 className="text-5xl">Top {limit} Brasil</h2>
        <h4 className="text-2xl opacity-50 text-center">
          Seu relatório diário das faixas mais tocadas no momento
        </h4>
      </section>
      <section className=" grid grid-cols-2 gap-x-20 gap-y-4 -mr-9 p-16">
        {topTrendingSongs &&
          topTrendingSongs.map((song) => {
            const regex = /\s*\(.*\)|\s*-.* /g
            const albumNameFormated = song.album.name.replace(regex, '')
            const songNameFormated = song.name.split('-')

            return (
              <div
                key={song.id}
                className="flex gap-5 items-center max-w-[496px] flex-grow flex-shrink"
              >
                <img
                  src={song.image}
                  alt={song.album.name}
                  height={78}
                  width={78}
                  className="rounded-xl"
                />
                <div className="font-bold ">
                  <h3 className="text-2xl">
                    {songNameFormated[0].replace(regex, '')}
                  </h3>
                  <h4 className="text-xl opacity-50">{albumNameFormated}</h4>
                </div>
              </div>
            )
          })}
      </section>
    </div>
  )
}
