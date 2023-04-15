import { useEffect, useState } from 'react'
import { getTopTrending, TopTrendingTypes } from '../services/api'

interface Props {
  limit: number
}

export function TopTrending({ limit }: Props) {
  const [topTrendingSongs, setTopTrendingSongs] = useState<
    TopTrendingTypes[] | undefined
  >()
  async function getTopTrendingData(limit: number) {
    const data = await getTopTrending(limit)

    setTopTrendingSongs(data)
  }
  useEffect(() => {
    getTopTrendingData(limit)
  }, [])
  return (
    <div className="w-full flex flex-col items-center justify-center font-gotham text-white rounded-2xl bg-gradientTrending">
      <section className="font-gotham flex flex-col items-center gap-6 mt-16 font-bold">
        <h2 className="text-5xl">Top 10 Brasil</h2>
        <h4 className="text-2xl opacity-50 text-center">
          Seu relatório diário das faixas mais tocadas no momento
        </h4>
      </section>
      <section className="grid sm:grid-rows-5 lg:grid-cols-2 p-16 gap-4">
        {topTrendingSongs &&
          topTrendingSongs.map((song) => {
            return (
              <div key={song.id} className="flex gap-5 items-center">
                <img
                  src={song.image}
                  alt={song.album.name}
                  height={78}
                  width={78}
                  className="rounded-xl"
                />
                <div className="font-bold ">
                  <h3 className="text-2xl">{song.name}</h3>
                  <h4 className="text-xl opacity-50">{song.album.name}</h4>
                </div>
              </div>
            )
          })}
      </section>
    </div>
  )
}
