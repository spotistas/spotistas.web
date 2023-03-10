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
        <div className="w-[665px] mx-auto text-white ">
            <div className='rounded-t-3xl pt-32 pb-9 pl-7 bg-center h-[245px]' style={{backgroundImage: `url(${monthArtist.imageUrl})`}}>
                <p className="font-medium text-2xl">Artista do Mês</p>
                <p className="font-bold text-5xl">{monthArtist.name}</p>
            </div>
            <div className="bg-gradientGrid rounded-b-3xl pb-11 h-[630px]">
                {monthArtist.musics.map((music, index) => (
                    <div key={index} className="flex pt-10 pl-20">
                        <div>
                            <img
                                className="max-w-[77px] max-h-[77px]" 
                                src={music.albumBg} 
                            />
                        </div>
                        <div className="pl-5">
                            <p  className="font-bold text-3xl">{music.title}</p>
                            <p className="font-bold text-2xl opacity-50">{music.album}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}