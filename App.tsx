import { type ReactElement } from 'react'
import { NativeBaseProvider, Center, Heading, Text } from 'native-base'
import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla'

export default function App (): ReactElement {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold
  })

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        {
          fontsLoaded
            ? <Heading
                fontFamily="heading"
                fontSize="xl">
                  Hello
              </Heading>
            : <Text>Loading</Text>
        }
      </Center>
    </NativeBaseProvider>

  )
}
