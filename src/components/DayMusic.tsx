/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Loading } from './Loading'
import { DayMusicProps } from '../services/types'

interface props {
  data: DayMusicProps | undefined
}

export function DayMusic({ data }: props) {
  const [formatedDate, setFormatedDate] = useState('')

  function formatDate(date: string | undefined) {
    if (typeof date === 'string') {
      const dateArray = date.split('-')
      const year = dateArray.filter((date) => date.length === 4)
      setFormatedDate(year[0])
    } else {
      console.log('invalid type of date')
    }
  }

  useEffect(() => {
    formatDate(data?.album.release_date)
  }, [])

  return (
    <div className="overflow-hidden rounded-3xl bg-[#171A20] text-white sm:w-1/2 2xl:w-[665px]">
      {data === undefined ? (
        <Loading />
      ) : (
        <div>
          <div
            className=" relative h-96 bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)), url(${data.image})`,
            }}
          >
            <div className="absolute bottom-6 left-9">
              <p className="text-xl font-medium md:text-2xl">Musica do Dia</p>
              <p className="text-4xl font-bold md:text-5xl">{data.name}</p>
            </div>
          </div>
          <div className="flex flex-col gap-10 px-9">
            <div className="mt-12 flex items-center gap-4 font-gotham">
              <img
                src={data.artists[0].image}
                alt={`image from ${data.artists[0].name}`}
                height={68}
                width={68}
                className="rounded-full"
              />
              <h1 className="text-2xl font-bold leading-7">
                {data.artists[0].name}
              </h1>
            </div>

            <p className="text-justify font-poppins text-xl font-bold leading-7 opacity-50">
              {data.note}
            </p>

            <div className="pb-10 font-poppins text-xl font-bold leading-8">
              <span className="opacity-50">Album: </span>
              <span className="opacity-100">{data.album.name}</span>
              <br></br>
              <span className="opacity-50">Lançamento: </span>
              <span className="opacity-100">{formatedDate}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
