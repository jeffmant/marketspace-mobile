import { type SigninDTO } from '@dtos/signin.dto'
import { type UserDTO } from '@dtos/user.dto'
import { api } from '@services/api'
import { removeToken, saveToken } from '@storage/auth.storage'
import { removeUser, saveUser } from '@storage/user.storage'
import { AppError } from '@utils/errors/app.error'
import { createContext, useState, type ReactNode } from 'react'

export type AuthContextDataProps = {
  user: UserDTO
  isLoading: boolean
  signin: (signinDTO: SigninDTO) => Promise<void>
  signup: (formData: FormData) => Promise<void>
  signout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps)

export function AuthContextProvider ({ children }: { children: ReactNode }): ReactNode {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)
  const [isLoading, setIsLoading] = useState(false)

  async function signin (signinDTO: SigninDTO): Promise<void> {
    try {
      setIsLoading(true)

      const { data: { token, user, refresh_token: refreshToken } } = await api.post('/sessions', signinDTO)

      await saveUser(user)
      await saveToken({ token, refreshToken })

      setUser(user)
    } catch (error: any) {
      throw new AppError(error?.message || 'Não foi possível logar')
    } finally {
      setIsLoading(false)
    }
  }

  async function signup (formData: FormData): Promise<void> {
    try {
      setIsLoading(true)

      await api.post('/users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    } catch (error: any) {
      console.log(error)
      throw new AppError(error?.message || 'Não foi possível cadastrar')
    } finally {
      setIsLoading(false)
    }
  }

  async function signout (): Promise<void> {
    try {
      setIsLoading(true)
      await removeToken()
      await removeUser()
      setUser({} as UserDTO)
    } catch (error: any) {
      throw new AppError(error?.message || 'Não foi possível deslogar')
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, signin, signup, signout }}>
      { children }
    </AuthContext.Provider>
  )
}
