import { type UserDTO } from '@dtos/user.dto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { USER_STORAGE } from './config'

export async function saveUser (userDTO: UserDTO): Promise<void> {
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(userDTO))
}

export async function getUser (): Promise<UserDTO> {
  const storedUser = await AsyncStorage.getItem(USER_STORAGE)

  const user = storedUser ? JSON.parse(storedUser) : {}

  return user
}

export async function removeUser (): Promise<void> {
  await AsyncStorage.removeItem(USER_STORAGE)
}
