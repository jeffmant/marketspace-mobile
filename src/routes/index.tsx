import { useAuth } from '@hooks/auth.hook'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { Box, useTheme } from 'native-base'
import { type ReactElement } from 'react'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes (): ReactElement {
  const { colors } = useTheme()

  const { user } = useAuth()

  const theme = DefaultTheme
  theme.colors.background = colors.gray['100']

  return (
    <Box flex={1} bg="gray.100">
      <NavigationContainer theme={theme}>
        {
          user?.id ? <AppRoutes /> : <AuthRoutes />
        }
      </NavigationContainer>
    </Box>
  )
}
