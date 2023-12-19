import { useAuth } from '@hooks/auth.hook'
import { api } from '@services/api'
import { Avatar, Center, Image, Text } from 'native-base'
import { User } from 'phosphor-react-native'
import { type ReactNode } from 'react'

export function Home (): ReactNode {
  const { user } = useAuth()
  return (
    <Center flex={1}>
      <Avatar borderColor="blue.500" borderWidth={4} size={24}>
            {
              user?.avatar
                ? <Image source={{ uri: `${api.defaults.baseURL}/images/${user?.avatar}` }} alt='foto de perfil' />
                : <User size={64} color="#5F5B62" />
            }
          </Avatar>
      <Text>Home</Text>
    </Center>
  )
}
