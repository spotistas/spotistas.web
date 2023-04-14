/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { getMusicDay, DayMusicProps } from '../services/api'
import { Loading } from './Loading'

export function DayMusic() {
  const [musicDay, setMusicDay] = useState<DayMusicProps | undefined>()
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

  async function getMusicDayData() {
    const musicDayData = await getMusicDay()
    setMusicDay(musicDayData)
    formatDate(musicDayData?.album.release_date)
  }

  useEffect(() => {
    getMusicDayData()
  }, [])

  return (
    <div className="2xl:w-[665px] sm:w-[550px] text-white smm:mx-5 rounded-3xl bg-[#171A20] overflow-hidden">
      {musicDay === undefined ? (
        <Loading />
      ) : (
        <div>
          <div
            className=" h-96 bg-center relative"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)), url(${musicDay.image})`,
            }}
          >
            <div className="absolute bottom-6 left-9">
              <p className="font-medium md:text-2xl text-xl">Musica do Dia</p>
              <p className="font-bold md:text-5xl text-4xl">{musicDay.name}</p>
            </div>
          </div>
          <div className="flex flex-col gap-10 px-9">
            <div className="mt-12 flex items-center gap-4 font-gotham">
              <img
                src={musicDay.artists[0].image}
                alt={`image from ${musicDay.artists[0].name}`}
                height={68}
                width={68}
                className="rounded-full"
              />
              <h1 className="font-bold text-2xl leading-7">
                {musicDay.artists[0].name}
              </h1>
            </div>

            <p className="opacity-50 font-poppins font-bold text-xl leading-7 text-justify">
              {musicDay.note}
            </p>

            <div className="font-poppins font-bold text-xl leading-8 ">
              <span className="opacity-50">Album: </span>
              <span className="opacity-100">{musicDay.album.name}</span>
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
