import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { DayMusicProps, TopTrendingTypes, UserInfo } from './types'

export const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5001',
  withCredentials: true,
})

export async function getMusicDay(): Promise<DayMusicProps | undefined> {
  try {
    const response: AxiosResponse<DayMusicProps> = await api.get('/tracks/day')
    return response.data
  } catch (err) {
    console.log(err)
    return undefined
  }
}

export async function getTopTrending(
  limit: number,
): Promise<TopTrendingTypes[] | undefined> {
  try {
    const { data }: AxiosResponse<TopTrendingTypes[]> = await api.get(
      `/tracks?top=br&limit=${limit}`,
    )
    return data
  } catch (err) {
    console.log(err)
    return undefined
  }
}

export async function getUserTopTracks(): Promise<TopTrendingTypes> {
  const { data } = await api.get('/me/top/tracks')
  return data
}

export async function getUserInfo(): Promise<UserInfo> {
  const { data } = await api.get('/me')
  return data
}

export async function getUserTopArtists() {
  const { data } = await api.get('/me/top/artists')
  return data
}

export async function getUserTopGenres() {
  const { data } = await api.get('/me/top/genres')
  return data
}

export async function getMainPageData() {
  const endpoints = [
    '/me/top/genres',
    '/me/top/tracks',
    '/me/top/artists',
    '/me',
  ]
  try {
    const requests = endpoints.map((endpoint) => api.get(endpoint))
    const responses = await Promise.all(requests)
    const data = responses.map((response) => response.data)
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
