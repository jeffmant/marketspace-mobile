import { Karla_400Regular, Karla_700Bold, useFonts } from '@expo-google-fonts/karla'
import { Signup } from '@screens/auth/Signup'
import { NativeBaseProvider, Text } from 'native-base'
import { type ReactElement } from 'react'

export default function App (): ReactElement {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold
  })

  return (
    <NativeBaseProvider>
      {
        fontsLoaded
          ? <Signup />
          : <Text>Loading</Text>
      }
    </NativeBaseProvider>

  )
};
