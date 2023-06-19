import { Playlist } from '../services/types'
interface OurPlaylistsProps {
  data: Playlist[]
}

export function OurPlaylists({ data }: OurPlaylistsProps) {
  return (
    <div className=" mx-auto font-gotham">
      <h2 className="mx-2 mb-11 text-center text-3xl font-bold sm:text-5xl">
        Confira as nossas Playlists !
      </h2>
      <div className="space-y-6 sm:flex sm:justify-center sm:gap-14 sm:space-y-0">
        {data.map((playlist) => (
          <div key={playlist.id} className="flex flex-col items-center gap-2">
            <a href={playlist.external_url}>
              <img
                src={playlist.image}
                alt={playlist.name}
                className="w-32 rounded-lg duration-200 hover:brightness-75 sm:w-[184px]"
              />
            </a>
            <h3 className="text-2xl font-bold sm:text-3xl">{playlist.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
