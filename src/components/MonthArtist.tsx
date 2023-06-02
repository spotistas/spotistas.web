/* eslint-disable react-hooks/exhaustive-deps */
import React, { CSSProperties, useEffect, useState } from 'react'
import axios from 'axios'
import {
  CircleNotch,
  Play,
  SkipBack,
  SkipForward,
  Pause,
  XCircle,
} from '@phosphor-icons/react'

interface Props {
  image: string
  name: string
  tracks: {
    name: string
    image: string
    preview_url: string
    album: {
      name: string
    }
    index: number
  }[]
}

interface RangeInputStyles extends CSSProperties {
  '--progress': string
}

export function MonthArtist() {
  const [monthArtist, setMonthArtist] = useState<Props>({
    image: '',
    name: '',
    tracks: [],
  })
  const getMonthArtist = async () => {
    try {
      const response = await axios.get(
        'https://spotistas.onrender.com/artists/month',
      )
      const Artist = response.data
      setMonthArtist(Artist)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getMonthArtist()
  }, [])

  const [showDiv, setShowDiv] = useState(false)
  const [urlMusic, setUrlMusic] = useState('')
  const [image, setImage] = useState('')
  const [music, setMusic] = useState('')
  const [album, setAlbum] = useState('')

  const previewMusic = (
    urlMusic: string,
    image: string,
    music: string,
    album: string,
    index: number,
  ) => {
    if (!showDiv && urlMusic.length > 0) {
      setShowDiv(true)
    } else if (urlMusic.length === 0) {
      setShowDiv(false)
    }
    setUrlMusic(urlMusic)
    setImage(image)
    setMusic(music)
    setAlbum(album)
    setCurrentTrackIndex(index)
  }

  const close = () => {
    setShowDiv(false)
  }

  const audioPlayer: React.RefObject<HTMLAudioElement> = React.createRef()
  const [isPlaying, setIsPlaying] = useState(false)
  useEffect(() => {
    if (audioPlayer.current && !audioPlayer.current.paused) {
      audioPlayer.current.pause()
    }
  }, [urlMusic])

  const toggleAudio = () => {
    if (audioPlayer.current) {
      if (audioPlayer.current.paused) {
        audioPlayer.current.play()
        setIsPlaying(true)
      } else {
        audioPlayer.current.pause()
        setIsPlaying(false)
      }
    }
  }

  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    if (audioPlayer.current) {
      const onTimeUpdate = () => {
        setCurrentTime(audioPlayer.current?.currentTime ?? 0)
      }
      audioPlayer.current.addEventListener('timeupdate', onTimeUpdate)
      const onDurationChange = () => {
        setDuration(audioPlayer.current?.duration ?? 0)
      }
      audioPlayer.current.addEventListener('durationchange', onDurationChange)
      return () => {
        audioPlayer.current?.removeEventListener('timeupdate', onTimeUpdate)
        audioPlayer.current?.removeEventListener(
          'durationchange',
          onDurationChange,
        )
      }
    }
  }, [audioPlayer])

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

  const previous = () => {
    const previousIndex = currentTrackIndex - 1
    const previousTrack = monthArtist.tracks[previousIndex]
    previewMusic(
      previousTrack.preview_url,
      previousTrack.image,
      previousTrack.name,
      previousTrack.album.name,
      previousTrack.index,
    )
    setCurrentTrackIndex(previousIndex)
  }

  const next = () => {
    const nextIndex = currentTrackIndex + 1
    const nextTrack = monthArtist.tracks[nextIndex]
    previewMusic(
      nextTrack.preview_url,
      nextTrack.image,
      nextTrack.name,
      nextTrack.album.name,
      nextTrack.index,
    )
    setCurrentTrackIndex(nextIndex)
    console.log('click')
  }

  return (
    <div className="text-white sm:w-[550px] 2xl:w-[665px]">
      {Object.keys(monthArtist.image && monthArtist.name && monthArtist.tracks)
        .length === 0 ? (
        <div className="flex h-[875px] items-center justify-center">
          <CircleNotch
            className="text-greenButton animate-spin"
            size={32}
            weight="bold"
          />
        </div>
      ) : (
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
          <div className="rounded-b-3xl bg-gradientGrid pb-11">
            {monthArtist.tracks.map((tracks, index) => (
              <div
                key={index}
                className="flex pt-10 pl-4 max-2xl:pr-8  sm:pl-8 2xl:pl-20"
              >
                <div>
                  {tracks.preview_url?.length > 0 ? (
                    <button
                      onClick={() => {
                        previewMusic(
                          tracks.preview_url,
                          tracks.image,
                          tracks.name,
                          tracks.album.name,
                          index,
                        )
                        toggleAudio()
                      }}
                    >
                      <div className="relative">
                        <img
                          className="m-auto flex h-auto max-h-[50px] w-full max-w-[50px] justify-center rounded-xl sm:max-h-[77px] sm:max-w-[77px]"
                          src={tracks.image}
                          alt="music album image"
                        />
                        <div>
                          {tracks.preview_url === urlMusic ? (
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
                        </div>
                      </div>
                    </button>
                  ) : (
                    <div>
                      <img
                        className="m-auto flex h-auto max-h-[50px] w-full max-w-[50px] justify-center rounded-xl sm:max-h-[77px] sm:max-w-[77px]"
                        src={tracks.image}
                        alt="music album image"
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center pl-2 sm:pl-5 ">
                  <p className="text-sm font-bold sm:text-lg 2xl:text-3xl">
                    {tracks.name}
                  </p>
                  <p className="text-xs font-bold opacity-50 sm:text-base 2xl:text-2xl">
                    {tracks.album.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {showDiv && (
            <div className=" fixed bottom-0 right-0 flex w-full flex-col items-center bg-black bg-opacity-50 p-2">
              <div className="flex w-full justify-around sm:w-3/5 sm:justify-between">
                <div className="flex w-96 items-center">
                  <div>
                    <img
                      className="m-auto flex max-h-[35px] max-w-[35px] justify-center rounded-full"
                      src={image}
                      alt="image"
                    />
                  </div>
                  <div className="flex flex-col justify-center pl-2 sm:pl-5">
                    <p className="text-sm font-bold max-smm:hidden sm:text-base 2xl:text-lg">
                      {music}
                    </p>
                    <p className="text-xs font-bold opacity-50 max-smm:hidden sm:text-sm 2xl:text-base">
                      {album}
                    </p>
                    <p className="text-sm font-bold smm:hidden sm:text-base 2xl:text-lg">
                      {music.slice(0, 14) + '...'}
                    </p>
                    <p className="text-xs font-bold opacity-50 smm:hidden sm:text-sm 2xl:text-base">
                      {album.slice(0, 14) + '...'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <audio
                    ref={audioPlayer}
                    src={urlMusic}
                    autoPlay
                    onLoadedData={() => {
                      if (audioPlayer.current) {
                        setIsPlaying(!audioPlayer.current.paused)
                        audioPlayer.current.volume = 0.25
                      }
                    }}
                  ></audio>
                  <div className="flex text-base smm:text-2xl">
                    <button onClick={previous}>
                      <SkipBack className="mx-2" />
                    </button>
                    <button onClick={toggleAudio}>
                      {!isPlaying ? (
                        <Play className="mx-2" />
                      ) : (
                        <Pause className="mx-2" />
                      )}
                    </button>
                    <button onClick={next}>
                      <SkipForward className="mx-2" />
                    </button>
                    <button className="sm:hidden" onClick={close}>
                      <XCircle />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex w-full flex-col justify-around sm:w-3/5">
                <input
                  className="range-input w-full appearance-none overflow-hidden bg-gray-300 shadow-lg"
                  type="range"
                  defaultValue="0"
                  value={currentTime}
                  min="0"
                  max={audioPlayer.current?.duration ?? duration}
                  step="0.01"
                  style={
                    {
                      '--progress': `${(currentTime / duration) * 100}%`,
                    } as RangeInputStyles
                  }
                  onChange={(event) => {
                    if (audioPlayer.current) {
                      audioPlayer.current.currentTime =
                        event.target.valueAsNumber
                    }
                  }}
                />
              </div>
              <div className="max-sm:hidden smm:absolute smm:top-2 smm:right-5 smm:text-2xl">
                <button onClick={close}>
                  <XCircle size={32} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
