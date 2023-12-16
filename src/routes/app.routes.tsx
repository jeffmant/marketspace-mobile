import { createNativeStackNavigator, type NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Home } from '@screens/Home'
import { type ReactElement } from 'react'

type AppRoutesTypes = {
  home: undefined
}

export type AppNavigatorRoutesprops = NativeStackNavigationProp<AppRoutesTypes>

const { Navigator, Screen } = createNativeStackNavigator<AppRoutesTypes>()

export function AppRoutes (): ReactElement {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
    </Navigator>
  )
}
