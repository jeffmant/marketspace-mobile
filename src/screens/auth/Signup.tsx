import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { Logo } from '@components/Logo'
import { useNavigation } from '@react-navigation/native'
import { type AuthNavigatorRoutesprops } from '@routes/auth.routes'
import { Avatar, Center, Heading, IconButton, ScrollView, Text, VStack } from 'native-base'
import { PencilSimpleLine, User } from 'phosphor-react-native'
import { type ReactElement } from 'react'

export function Signup (): ReactElement {
  const { navigate } = useNavigation<AuthNavigatorRoutesprops>()

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
          <Input placeholder='Nome' />
          <Input placeholder='Email' />
          <Input placeholder='Telefone' />
          <Input placeholder='Senha' />
          <Input placeholder='Confirmar senha' />

          <Button
            mt={1}
            title="Criar"
            variant='tertiary'
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
