import React, { CSSProperties, useEffect, useState } from 'react'
import {
  Play,
  SkipBack,
  SkipForward,
  Pause,
  XCircle,
} from '@phosphor-icons/react'

export interface songsProps {
  songs: {
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
}

interface RangeInputStyles extends CSSProperties {
  '--progress': string
}

export default function MusicPlayer({ songs }: songsProps) {
  const audioPlayer: React.RefObject<HTMLAudioElement> = React.createRef()
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
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

  const previous = () => {
    const previousIndex = currentTrackIndex - 1
    const previousTrack = songs.tracks[previousIndex]
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
    const nextTrack = songs.tracks[nextIndex]
    previewMusic(
      nextTrack.preview_url,
      nextTrack.image,
      nextTrack.name,
      nextTrack.album.name,
      nextTrack.index,
    )
    setCurrentTrackIndex(nextIndex)
  }

  return (
    <div>
      <div>
        {songs.tracks.map((tracks, index) => (
          <div
            key={index}
            className="flex pt-10 2xl:pl-20 sm:pl-8  pl-4 max-2xl:pr-8"
          >
            <div>
              {tracks.preview_url?.length > 0 ? (
                <div>
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
                        className="sm:max-w-[77px] max-w-[50px] sm:max-h-[77px] max-h-[50px] rounded-xl flex justify-center m-auto w-full h-auto"
                        src={tracks.image}
                        alt="music album image"
                      />
                      <div>
                        {tracks.preview_url === urlMusic ? (
                          <div>
                            {!isPlaying ? (
                              <div
                                className={`absolute inset-0 z-7 hover:bg-play bg-center bg-no-repeat`}
                              ></div>
                            ) : (
                              <div
                                className={`absolute inset-0 z-7 hover:bg-pause bg-center bg-no-repeat`}
                              ></div>
                            )}
                          </div>
                        ) : (
                          <div
                            className={`absolute inset-0 z-7 hover:bg-play bg-center bg-no-repeat`}
                          ></div>
                        )}
                      </div>
                    </div>
                  </button>
                </div>
              ) : (
                <div>
                  <img
                    className="sm:max-w-[77px] max-w-[50px] sm:max-h-[77px] max-h-[50px] rounded-xl flex justify-center m-auto w-full h-auto"
                    src={tracks.image}
                    alt="music album image"
                  />
                </div>
              )}
            </div>
            <div className="sm:pl-5 pl-2 flex flex-col justify-center ">
              <p className="font-bold 2xl:text-3xl sm:text-lg text-sm">
                {tracks.name}
              </p>
              <p className="font-bold 2xl:text-2xl sm:text-base text-xs opacity-50">
                {tracks.album.name.slice(0, 14) + '...'}
              </p>
            </div>
          </div>
        ))}
      </div>
      {showDiv && (
        <div className=" bg-black w-full bg-opacity-50 fixed bottom-0 right-0 flex p-2 items-center flex-col">
          <div className="flex sm:justify-between sm:w-3/5 justify-around w-full">
            <div className="flex items-center w-96">
              <div>
                <img
                  className="max-w-[35px] max-h-[35px] rounded-full flex justify-center m-auto"
                  src={image}
                  alt="image"
                />
              </div>
              <div className="sm:pl-5 pl-2 flex flex-col justify-center">
                <p className="font-bold 2xl:text-lg sm:text-base text-sm max-smm:hidden">
                  {music}
                </p>
                <p className="font-bold 2xl:text-base sm:text-sm text-xs opacity-50 max-smm:hidden">
                  {album}
                </p>
                <p className="font-bold 2xl:text-lg sm:text-base text-sm smm:hidden">
                  {music.slice(0, 14) + '...'}
                </p>
                <p className="font-bold 2xl:text-base sm:text-sm text-xs opacity-50 smm:hidden">
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
              <div className="flex smm:text-2xl text-base">
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
          <div className="flex flex-col justify-around sm:w-3/5 w-full mt-2">
            <input
              className="appearance-none w-full bg-gray-300 overflow-hidden range-input shadow-lg"
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
    </div>
  )
}
