import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { Box, useTheme } from 'native-base'
import { type ReactElement } from 'react'
import { AuthRoutes } from './auth.routes'

export function Routes (): ReactElement {
  const { colors } = useTheme()

  const theme = DefaultTheme
  theme.colors.background = colors.gray['100']

  return (
    <Box flex={1} bg="gray.100">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}
