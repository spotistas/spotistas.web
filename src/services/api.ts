import axios from 'axios'

export interface MonthArtistProps {
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

export interface DayMusicProps {
  name: string
  image: string
  artists: {
    name: string
    image: string
  }[]
  album: {
    name: string
    release_date: string
  }
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
  artists: [
    {
      id: string
      name: string
      external_url: string
    },
  ]
  album: {
    id: string
    name: string
    image: string
    release_date: string
    external_url: string
  }
}

export const api = axios.create({
  baseURL: 'https://spotistas.natanaelsc.xyz',
})

export async function getMonthArtist() {
  try {
    const response = await api.get('/artists/month')
    console.log(response)
    return response.data as MonthArtistProps
  } catch (err) {
    console.log(err)
    return undefined
  }
}

export async function getMusicDay() {
  try {
    const response = await api.get('/tracks/day')
    return response.data as DayMusicProps
  } catch (err) {
    console.log(err)
    return undefined
  }
}

export async function getTopTrending(limit: number) {
  try {
    const response = await api.get(`/tracks?top=br&limit=${limit}`)
    return response.data as Array<TopTrendingTypes>
  } catch (err) {
    console.log(err)
    return undefined
  }
}
