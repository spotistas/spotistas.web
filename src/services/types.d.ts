export interface Artist {
  id: string
  name: string
  external_url: string
  image: string
}

export interface Album {
  id: string
  name: string
  image: string
  release_date: string
  external_url: string
}

export interface DayMusicProps {
  name: string
  image: string
  artists: Artist[]
  album: Album
  note: string
}

export interface TopTrendingTypes {
  id: string
  name: string
  image: string
  preview_url: string
  external_url: string
  duration_ms: number
  popularity: number
  artists: Artist[]
  album: Album
}

export interface TopGenreAuth {
  name: string
}

export interface TopArtistAuth extends Artist {
  genres: TopGenreAuth[]
  popularity: number
}

export interface UserInfo {
  id: string
  name: string
  image: string
  email: string
  followers: number
  external_url: string
  country: string
  product: string
}
