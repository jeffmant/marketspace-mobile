import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { Logo } from '@components/Logo'
import { type SigninDTO } from '@dtos/signin.dto'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from '@hooks/auth.hook'
import { useNavigation } from '@react-navigation/native'
import { type AuthNavigatorRoutesprops } from '@routes/auth.routes'
import { AppError } from '@utils/errors/app.error'
import { Center, Heading, ScrollView, Text, VStack, useToast } from 'native-base'
import { useState, type ReactElement } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as Yup from 'yup'

const signinValidationSchema = Yup.object({
  email: Yup.string().required('Insira o email').email('Email inválido'),
  password: Yup.string().required('Insira a senha').min(6, 'A senha contém pelo menos 6 dígitos')
})

export function Signin (): ReactElement {
  const { navigate } = useNavigation<AuthNavigatorRoutesprops>()

  const { control, handleSubmit, formState: { errors, isValid }, reset } = useForm<SigninDTO>({
    resolver: yupResolver(signinValidationSchema)
  })

  const { signin } = useAuth()
  const toast = useToast()

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (signinDTO: SigninDTO): Promise<void> => {
    try {
      setIsLoading(true)
      await signin(signinDTO)
    } catch (error) {
      toast.show({
        title: error instanceof AppError ? error.message : 'Algo deu errado',
        placement: 'top',
        color: 'red.500'
      })
    } finally {
      setIsLoading(false)
      reset({
        email: '',
        password: ''
      }, { keepErrors: false })
    }
  }

  function handleGoToSignup (): void {
    navigate('signup')
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1
      }}
      showsVerticalScrollIndicator={false}
    >
      <VStack
        bg="gray.200"
        px={2}
        pb={16}
        pt={8}
        borderBottomRadius={32}
      >
        <Center>
          <Logo size={100} />

          <Heading
            fontFamily="heading"
            fontSize="4xl"
            color="gray.700"
          >
            marketspace
          </Heading>
          <Text
            fontFamily="body"
            fontSize="md"
            color="gray.500"
          >
            Seu espaço de compra e venda
          </Text>

        </Center>

        <Center px={10} mt={16}>
          <Text
            fontFamily="body"
            fontSize="md"
            color="gray.700"
            mb={2}
          >
            Acesse a sua conta
          </Text>

          <Controller
            name='email'
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder='Email'
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.email?.message}
              />
            )}
          />

          <Controller
            name='password'
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder='Senha'
                secureTextEntry
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.password?.message}
              />
            )}
          />

          <Button
            mt={4}
            title="Avançar"
            variant='primary'
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onPress={handleSubmit(onSubmit)}
            disabled={isLoading || !isValid}
            isLoading={isLoading}
          />
        </Center>
      </VStack>
      <VStack flex={1} px={10} pt={12}>
        <Center>
          <Text
            fontFamily="body"
            fontSize="md"
            color="gray.700"
          >
            Ainda não tem acesso?
          </Text>

          <Button
            mt={4}
            title="Criar uma conta"
            variant='secondary'
            onPress={handleGoToSignup}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}
