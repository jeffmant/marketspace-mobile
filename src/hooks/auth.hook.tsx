import { AuthContext, type AuthContextDataProps } from '@contexts/auth.context'
import { useContext } from 'react'

export function useAuth (): AuthContextDataProps {
  const context = useContext(AuthContext)

  return context
}
