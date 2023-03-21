import { useEffect, useState } from "react"
import axios from "axios"
import { CircleNotch } from "@phosphor-icons/react"

interface Props {
    image: string,
    name: string,
    tracks: {
        name: string,
        album:{
            name: string
        }, 
        image: string
    }[],
}


export function MonthArtist() {
    const [monthArtist, setMonthArtist] = useState<Props>({image: "", name: "", tracks: []}) 

    const getMonthArtist = async() => {
        try {
            const response = await axios.get("https://spotistas.onrender.com/artists/month");
            const Artist = response.data
            setMonthArtist(Artist)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getMonthArtist()
    },[])
    
    return(
        <div className="2xl:w-[665px] sm:w-[550px] text-white smm:mx-5">
            {Object.keys(monthArtist.image && monthArtist.name && monthArtist.tracks).length === 0 ? (
            <div className="h-[875px] flex justify-center items-center">
                    <CircleNotch className="animate-spin text-greenButton" size={32} weight="bold" />
            </div> 
            ) : (
            <div>
                <div className='rounded-t-3xl pt-32 md:pb-9 pb-5 md:pl-7 pl-5 bg-center bg-no-repeat bg-cover' style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)), url(${monthArtist.image})`}}>
                    <p className="font-medium md:text-2xl text-xl">Artista do Mês</p>
                    <p className="font-bold md:text-5xl text-4xl">{monthArtist.name}</p>
                </div>
                <div className="bg-gradientGrid rounded-b-3xl pb-11">
                    {monthArtist.tracks.slice(0, 5).map((tracks, index) => (
                        <div key={index} className="flex pt-10 2xl:pl-20 sm:pl-8  pl-4 max-2xl:pr-8">
                            <div>
                                <img
                                    className="sm:max-w-[77px] max-w-[50px] sm:max-h-[77px] max-h-[50px] rounded-xl flex justify-center m-auto" 
                                    src={tracks.image} 
                                />
                            </div>
                            <div className="sm:pl-5 pl-2 flex flex-col justify-center ">
                                <p  className="font-bold 2xl:text-3xl sm:text-lg text-sm">{tracks.name}</p>
                                <p className="font-bold 2xl:text-2xl sm:text-base text-xs opacity-50">{tracks.album.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            )}
        </div>
    )
}