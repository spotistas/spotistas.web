/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'
import { TopTrendingTypes } from '../services/types'
interface TopTrendingProps {
  data: TopTrendingTypes[] | undefined
}
export function TopTrending({ data }: TopTrendingProps) {
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  function handleResize() {
    setIsLargeScreen(window.innerWidth >= 768)
  }
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div className=" w-full ">
      <section className=" flex flex-col gap-4 text-center font-gotham font-bold md:text-left">
        <h2 className="text-4xl md:hidden">Top 5 Brasil</h2>
        <h2 className="hidden text-5xl md:block">Top Brasil</h2>
        <h4 className="text-center opacity-50 md:text-left md:text-2xl">
          Seu relatório diário das faixas mais tocadas no momento
        </h4>
      </section>
      <section className="no-scrollbar flex w-full flex-col gap-4 overflow-y-hidden overflow-x-scroll px-4 pt-8 md:flex-row md:px-0">
        {data &&
          data.slice(0, isLargeScreen ? 10 : 5).map((song, index) => {
            const regex = /\s*\(.*\)|\s*-.* /g
            const songNameFormated = song.name.split('-')

            return (
              <div
                key={song.id}
                className="flex items-center gap-2 md:min-w-max md:flex-col md:items-start "
              >
                <img
                  src={song.image}
                  alt={song.album.name}
                  height={isLargeScreen ? 264 : 78}
                  width={isLargeScreen ? 264 : 78}
                  className="rounded-[10px]"
                />
                <div className="font-bold md:flex md:items-center md:gap-4">
                  <div className="hidden text-7xl font-bold text-[#888] md:block">
                    <span>{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl">
                      {songNameFormated[0].replace(regex, '')}
                    </h3>
                    <h4 className="text-lg opacity-50">
                      {song.artists[0].name}
                    </h4>
                  </div>
                </div>
              </div>
            )
          })}
      </section>
    </div>
  )
}
