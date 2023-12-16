import AsyncStorage from '@react-native-async-storage/async-storage'
import { TOKEN_STORAGE } from './config'

type AuthToken = {
  token: string
  refreshToken: string
}

export async function saveToken ({ token, refreshToken }: AuthToken): Promise<void> {
  await AsyncStorage.setItem(TOKEN_STORAGE, JSON.stringify({ token, refreshToken }))
}

export async function getToken (): Promise<AuthToken> {
  const storedToken = await AsyncStorage.getItem(TOKEN_STORAGE)

  const authToken = storedToken ? JSON.parse(storedToken) : {}

  return authToken
}

export async function removeToken (): Promise<void> {
  await AsyncStorage.removeItem(TOKEN_STORAGE)
}
