import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { Logo } from '@components/Logo'
import { type SignupDTO } from '@dtos/signup.dto'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native'
import { type AuthNavigatorRoutesprops } from '@routes/auth.routes'
import { Avatar, Center, Heading, IconButton, ScrollView, Text, VStack } from 'native-base'
import { PencilSimpleLine, User } from 'phosphor-react-native'
import { useState, type ReactElement } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as Yup from 'yup'

const signupValidationSchema = Yup.object({
  name: Yup.string().required('Insira o seu nome'),
  email: Yup.string().required('Insira o email').email('Email inválido'),
  phone: Yup.string().required('Insira o celular'),
  password: Yup.string().required('Insira a senha').min(6, 'A senha deve ter pelo menos 6 dígitos'),
  confirmPassword: Yup
    .string()
    .required('Confirme a senha')
    .oneOf([Yup.ref('password'), ''], 'As senhas devem ser iguais')
})

export function Signup (): ReactElement {
  const { navigate } = useNavigation<AuthNavigatorRoutesprops>()

  const { control, handleSubmit, formState: { errors, isValid }, reset } = useForm<SignupDTO>({
    resolver: yupResolver(signupValidationSchema)
  })

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (data: SignupDTO): void => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      console.log(data)
      reset({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      }, { keepErrors: false })
    }, 3000)
  }

  function handleGoToSignin (): void {
    navigate('signin')
  }

  return (
    <ScrollView
      flex={1}
      bg="gray.200"
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 16
      }}
      showsVerticalScrollIndicator={false}
    >
      <VStack
        px={8}
        pt={4}
      >
        <Center>
          <Logo size={75} />

          <Heading
            fontFamily="heading"
            fontSize="xl"
            color="gray.700"
          >
            Boas vindas!
          </Heading>
          <Text
            fontFamily="body"
            fontSize="sm"
            color="gray.500"
          >
            Seu espaço de compra e venda
          </Text>

        </Center>

        <Center mt={4}>
          <Avatar borderColor="blue.500" borderWidth={4} size={24}>
            <User size={64} color="#5F5B62" />
          </Avatar>
          <IconButton
            _pressed={{ backgroundColor: 'blue.500' }}
            style={{
              position: 'relative',
              bottom: 40,
              left: 32
            }}
            bg="blue.500"
            rounded="full"
            size={10}
            icon={<PencilSimpleLine color='white' size={20} />}
          />
        </Center>

        <Center>
          <Controller
            name='name'
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder='Nome'
                autoCapitalize='words'
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.name?.message}
              />
            )}
          />

          <Controller
            name='email'
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder='Email'
                autoCapitalize='none'
                keyboardType="email-address"
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.email?.message}
              />
            )}
          />

          <Controller
            name='phone'
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder='Celular'
                autoCapitalize='none'
                keyboardType="phone-pad"
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.phone?.message}
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

          <Controller
            name='confirmPassword'
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                placeholder='Confirmar Senha'
                secureTextEntry
                value={value}
                onChangeText={onChange}
                errorMessage={errors?.confirmPassword?.message}
              />
            )}
          />

          <Button
            mt={1}
            title="Criar"
            variant='tertiary'
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onPress={handleSubmit(onSubmit)}
            disabled={isLoading || !isValid}
            isLoading={isLoading}
          />
        </Center>

        <Center mt={4}>
          <Text
            fontFamily="body"
            fontSize="md"
            color="gray.700"
          >
            Já tem uma conta?
          </Text>

          <Button
            mt={1}
            title="Ir para o login"
            variant='secondary'
            onPress={handleGoToSignin}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}
