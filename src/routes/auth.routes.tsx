import { createNativeStackNavigator, type NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Signin } from '@screens/auth/Signin'
import { Signup } from '@screens/auth/Signup'
import { type ReactElement } from 'react'

type AuthRoutesTypes = {
  signin: undefined
  signup: undefined
}

export type AuthNavigatorRoutesprops = NativeStackNavigationProp<AuthRoutesTypes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesTypes>()

export function AuthRoutes (): ReactElement {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signin" component={Signin} />
      <Screen name="signup" component={Signup} />
    </Navigator>
  )
}
