import axios from 'axios'

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

export const api = axios.create({
  baseURL: 'https://spotistas.onrender.com',
})

export async function getMusicDay() {
  try {
    const response = await api.get('/tracks/day')
    return response.data as DayMusicProps
  } catch (err) {
    console.log(err)
    return undefined
  }
}
