import React, { useEffect, useState } from "react"
import axios from "axios"
import { CircleNotch, Play, SkipBack, SkipForward, Pause, Divide } from "@phosphor-icons/react"

interface Props {
    image: string,
    name: string,
    tracks: {
        name: string,
        image: string,
        preview_url: string,
        album:{
            name: string,
        }, 
    }[],
}

export function MonthArtist() {
    const [monthArtist, setMonthArtist] = useState<Props>({image: "", name: "", tracks: []}) 
    const getMonthArtist = async() => {
        try {
            const response = await axios.get("https://spotistas.onrender.com/artists/month")
            const Artist = response.data
            console.log(Artist)
            setMonthArtist(Artist)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getMonthArtist()
    },[])

    const [showDiv, setShowDiv] = useState(false)
    const [urlMusic, setUrlMusic] = useState("")
    const [image, setImage] = useState("")
    const [music, setMusic] = useState("")
    const [album, setAlbum] = useState("")

    const previewMusic = (urlMusic: string, image: string, music: string, album: string) => {
        if (!showDiv && urlMusic.length > 0) {
            setShowDiv(true)
        } else if (urlMusic.length == 0) {
            setShowDiv(false)
        }
        setUrlMusic(urlMusic)
        setImage(image)
        setMusic(music)
        setAlbum(album)
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

        const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

        const previous = () => {
            const previous = currentTrackIndex - 1
                const previousTrack = monthArtist.tracks[previous]
                previewMusic(previousTrack.preview_url, previousTrack.image, previousTrack.name, previousTrack.album.name)
                setCurrentTrackIndex(previous)
        }
        
        const next = () => {
            const nextIndex = currentTrackIndex + 1
                const nextTrack = monthArtist.tracks[nextIndex]
                previewMusic(nextTrack.preview_url, nextTrack.image, nextTrack.name, nextTrack.album.name)
                setCurrentTrackIndex(nextIndex)
        }

    return  (
        <div className="2xl:w-[665px] sm:w-[550px] text-white smm:mx-5">
            {Object.keys(monthArtist.image && monthArtist.name && monthArtist.tracks).length === 0 ? (
            <div className="h-[875px] flex justify-center items-center">
                    <CircleNotch className="animate-spin text-greenButton" size={32} weight="bold" />
            </div> 
            ) : (
            <div>
                <div 
                    className='rounded-t-3xl pt-32 md:pb-9 pb-5 md:pl-7 pl-5 bg-center bg-no-repeat bg-cover' 
                    style={
                        {backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)), url(${monthArtist.image})`    }}
                >
                    <p className="font-medium md:text-2xl text-xl">Artista do Mês</p>
                    <p className="font-bold md:text-5xl text-4xl">{monthArtist.name}</p>
                </div>
                <div className="bg-gradientGrid rounded-b-3xl pb-11">
                    {monthArtist.tracks.map((tracks, index) => (
                        <div key={index} className="flex pt-10 2xl:pl-20 sm:pl-8  pl-4 max-2xl:pr-8">
                                <div>
                                    {tracks.preview_url?.length > 0 ? (
                                        <button onClick={() => {
                                        previewMusic(tracks.preview_url, tracks.image, tracks.name, tracks.album.name,)
                                        toggleAudio()
                                    }}>
                                            <div className="relative">
                                                <img
                                                    className="sm:max-w-[77px] max-w-[50px] sm:max-h-[77px] max-h-[50px] rounded-xl flex justify-center m-auto w-full h-auto" 
                                                    src={tracks.image}
                                                    alt="music album image"
                                                />
                                                
                                                    <div>
                                                        {tracks.preview_url == urlMusic ? (
                                                        <div>
                                                                {!isPlaying ? (
                                                                    <div className={`absolute inset-0 z-7 hover:bg-play bg-center bg-no-repeat`}></div>
                                                                ) : (
                                                                    <div className={`absolute inset-0 z-7 hover:bg-pause bg-center bg-no-repeat`}></div>)}
                                                            </div>
                                                        ) : (
                                                        <div className={`absolute inset-0 z-7 hover:bg-play bg-center bg-no-repeat`}></div>
                                                        )}
                                                    </div>
                                                    
                                            </div>  
                                        </button>
                                    ):(
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
                                <p  className="font-bold 2xl:text-3xl sm:text-lg text-sm">{tracks.name}</p>
                                <p className="font-bold 2xl:text-2xl sm:text-base text-xs opacity-50">{tracks.album.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                    {showDiv && (
                        <div className=" bg-black w-full bg-opacity-50 fixed bottom-0 right-0 flex justify-around p-2 items-center">
                            <div className="flex justify-center items-center w-96">
                                <div>
                                    <img
                                        className="max-w-[35px] max-h-[35px] rounded-full flex justify-center m-auto"
                                        src={image} 
                                    />
                                </div>
                                <div className="sm:pl-5 pl-2 flex flex-col justify-center">
                                    <p className="font-bold 2xl:text-lg sm:text-base text-sm">{music}</p>
                                    <p className="font-bold 2xl:text-base sm:text-sm text-xs opacity-50">{album}</p>
                                </div>
                            </div> 
                            <div >
                                <audio ref={audioPlayer} src={urlMusic} autoPlay onLoadedData={
                                    () => {
                                        if (audioPlayer.current) {
                                            setIsPlaying(!audioPlayer.current.paused)
                                            audioPlayer.current.volume = .25
                                        }
                                    }
                                }>
                                    <source  type="audio/mpeg" />
                                </audio>
                                <div className="flex justify-around text-2xl my-auto">
                                    <button onClick={previous}>
                                        <SkipBack className="mx-2"/>
                                    </button>
                                    <button onClick={toggleAudio}>
                                        {!isPlaying ? <Play className="mx-2" /> : <Pause className="mx-2"/>}
                                    </button>
                                    <button onClick={next}>
                                        <SkipForward className="mx-2"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
            )}
        </div>
    )
}