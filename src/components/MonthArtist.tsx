import { useEffect, useState } from "react"
import axios from "axios"

interface Props {
    imageUrl: string,
    name: string,
    musics: {
        title: string,
        album: string,
        albumBg: string
    }[],
}


export function MonthArtist() {
    const [monthArtist, setMonthArtist] = useState<Props>({imageUrl: "", name: "", musics: []}) 

    const getMonthArtist = async() => {
        try {
            const response = await axios.get("http://localhost:3333/monthArtist");
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
        <div className="md:w-[665px] text-white">
            <div className='rounded-t-3xl pt-32 md:pb-9 pb-5 md:pl-7 pl-5 bg-center' style={{backgroundImage: `url(${monthArtist.imageUrl})`}}>
                <p className="font-medium md:text-2xl text-xl">Artista do Mês</p>
                <p className="font-bold md:text-5xl text-4xl">{monthArtist.name}</p>
            </div>
            <div className="bg-gradientGrid rounded-b-3xl pb-11">
                {monthArtist.musics.map((music, index) => (
                    <div key={index} className="flex pt-10 md:pl-20 pl-8 max-md:pr-8">
                        <div>
                            <img
                                className="max-w-[77px] max-h-[77px]" 
                                src={music.albumBg} 
                            />
                        </div>
                        <div className="md:pl-5 pl-2">
                            <p  className="font-bold md:text-3xl text-2xl">{music.title}</p>
                            <p className="font-bold md:text-2xl text-xl opacity-50">{music.album}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}