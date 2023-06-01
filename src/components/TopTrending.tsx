/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'
import { getTopTrending } from '../services/api'
import { TopTrendingTypes } from '../services/types'

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
    <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-gradientTrending font-gotham text-white">
      <section className="mt-16 flex flex-col items-center gap-6 text-center font-gotham font-bold">
        <h2 className="text-5xl">Top {limit} Brasil</h2>
        <h4 className="text-center text-2xl opacity-50">
          Seu relatório diário das faixas mais tocadas no momento
        </h4>
      </section>
      <section className=" -mr-9 grid grid-cols-2 gap-x-20 gap-y-4 p-16">
        {topTrendingSongs &&
          topTrendingSongs.map((song) => {
            const regex = /\s*\(.*\)|\s*-.* /g
            const albumNameFormated = song.album.name.replace(regex, '')
            const songNameFormated = song.name.split('-')

            return (
              <div
                key={song.id}
                className="flex max-w-[496px] flex-shrink flex-grow items-center gap-5"
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
