import React, { CSSProperties, useEffect, useState } from 'react'
import {
  Play,
  SkipBack,
  SkipForward,
  Pause,
  XCircle,
} from '@phosphor-icons/react'

export interface MusicPlayerProps {
  songs: {
    name: string
    image: string
    preview_url: string
    album: {
      name: string
    }
    index: number
  }[]
  index: number
  setIndex: (value: number) => void
  isPlaying: boolean
  setIsPlaying: (value: boolean) => void
}

interface RangeInputStyles extends CSSProperties {
  '--progress': string
}

export default function MusicPlayer({
  songs,
  index,
  setIndex,
  isPlaying,
  setIsPlaying,
}: MusicPlayerProps) {
  const audioPlayer: React.RefObject<HTMLAudioElement> = React.createRef()
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(-1)
  const [music, setMusic] = useState({
    urlMusic: '',
    image: '',
    music: '',
    album: '',
  })
  const previewMusic = (
    urlMusic: string,
    image: string,
    music: string,
    album: string,
    actuaIndex: number,
  ) => {
    setMusic({
      urlMusic,
      image,
      music,
      album,
    })
    setCurrentTrackIndex(actuaIndex)
  }
  const close = () => {
    setMusic({
      urlMusic: '',
      image: '',
      music: '',
      album: '',
    })
    setIsPlaying(false)
    setCurrentTrackIndex(-1)
  }

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

  useEffect(() => {
    if (audioPlayer.current) {
      const onTimeUpdate = () => {
        setCurrentTime(audioPlayer.current?.currentTime ?? 0)
        if (
          audioPlayer.current?.currentTime !== undefined &&
          audioPlayer.current?.duration !== undefined
        ) {
          if (audioPlayer.current.currentTime >= audioPlayer.current.duration) {
            toggleAudio()
            setIsPlaying(false)
          }
        }
      }

      audioPlayer.current.addEventListener('timeupdate', onTimeUpdate)
      const onDurationChange = () => {
        setDuration(audioPlayer.current?.duration ?? 0)
      }
      audioPlayer.current.addEventListener('durationchange', onDurationChange)
      return () => {
        audioPlayer.current?.removeEventListener('timeupdate', onTimeUpdate)
        audioPlayer.current?.removeEventListener('durationchange', onDurationChange)
      }
    }
  }, [audioPlayer])

  useEffect(() => {
    if (index !== currentTrackIndex && isPlaying === true) {
      const { name, image, preview_url, album } = songs[index]
      setMusic({
        urlMusic: preview_url,
        image,
        music: name,
        album: album.name,
      })
      setCurrentTrackIndex(index)
    } else {
      toggleAudio()
    }
  }, [isPlaying, index])

  const previousTrack = () => {
    let previousIndex = currentTrackIndex - 1
    while (
      previousIndex >= 0 &&
      (!songs[previousIndex].preview_url ||
        songs[previousIndex].preview_url.length === 0)
    ) {
      previousIndex--
    }
    if (previousIndex >= 0) {
      const previousTrack = songs[previousIndex]
      previewMusic(
        previousTrack.preview_url,
        previousTrack.image,
        previousTrack.name,
        previousTrack.album.name,
        previousIndex,
      )
      setIsPlaying(true)
      setCurrentTrackIndex(previousIndex)
      setIndex(previousIndex)
    }
  }

  const nextTrack = () => {
    let nextIndex = currentTrackIndex + 1
    while (
      nextIndex < songs.length &&
      (!songs[nextIndex].preview_url ||
        songs[nextIndex].preview_url.length === 0)
    ) {
      nextIndex++
    }
    if (nextIndex < songs.length) {
      const nextTrack = songs[nextIndex]
      previewMusic(
        nextTrack.preview_url,
        nextTrack.image,
        nextTrack.name,
        nextTrack.album.name,
        nextIndex,
      )
      setIsPlaying(true)
      setCurrentTrackIndex(nextIndex)
      setIndex(nextIndex)
    }
  }

  return (
    <>
      {music.urlMusic && (
        <div className=" bg-black w-full bg-opacity-50 fixed bottom-0 right-0 flex p-2 items-center flex-col z-10">
          <div className="flex sm:justify-between sm:w-3/5 justify-around w-full">
            <div className="flex items-center w-96">
              <div>
                <img
                  className="max-w-[35px] max-h-[35px] rounded-full flex justify-center m-auto"
                  src={music.image}
                  alt="image"
                />
              </div>
              <div className="sm:pl-5 pl-2 flex flex-col justify-center">
                <p className="font-bold 2xl:text-lg sm:text-base text-sm max-smm:hidden">
                  {music.music.slice(0, 34) + '...'}
                </p>
                <p className="font-bold 2xl:text-base sm:text-sm text-xs opacity-50 max-smm:hidden">
                  {music.album.slice(0, 38) + '...'}
                </p>
                <p className="font-bold 2xl:text-lg sm:text-base text-sm smm:hidden">
                  {music.music.slice(0, 13) + '...'}
                </p>
                <p className="font-bold 2xl:text-base sm:text-sm text-xs opacity-50 smm:hidden">
                  {music.album.slice(0, 14) + '...'}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <audio
                ref={audioPlayer}
                src={music.urlMusic}
                autoPlay
                onLoadedData={() => {
                  if (audioPlayer.current) {
                    setIsPlaying(!audioPlayer.current.paused)
                    audioPlayer.current.volume = 0.2
                  }
                }}
              ></audio>
              <div className="flex smm:text-2xl text-base">
                <button onClick={previousTrack}>
                  <SkipBack className="mx-2" />
                </button>
                <button
                  onClick={() => {
                    isPlaying === true
                      ? setIsPlaying(false)
                      : setIsPlaying(true)
                  }}
                >
                  {!isPlaying ? (
                    <Play className="mx-2" />
                  ) : (
                    <Pause className="mx-2" />
                  )}
                </button>
                <button onClick={nextTrack}>
                  <SkipForward className="mx-2" />
                </button>
                <button className="sm:hidden" onClick={close}>
                  <XCircle />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-around sm:w-3/5 w-full mt-2">
            <input
              className="appearance-none w-full bg-gray-300 overflow-hidden range-input shadow-lg"
              type="range"
              defaultValue={0}
              min={0}
              max={audioPlayer.current?.duration ?? duration}
              step={0.01}
              style={
                {
                  '--progress': `${(currentTime / duration) * 100}%`,
                } as RangeInputStyles
              }
              onChange={(event) => {
                if (audioPlayer.current) {
                  audioPlayer.current.currentTime = event.target.valueAsNumber
                }
              }}
            />
          </div>
          <div className="smm:absolute smm:top-2 smm:right-5 smm:text-2xl max-sm:hidden">
            <button onClick={close}>
              <XCircle size={32} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
