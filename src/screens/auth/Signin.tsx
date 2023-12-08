import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { Logo } from '@components/Logo'
import { Center, Heading, ScrollView, Text, VStack } from 'native-base'
import { type ReactElement } from 'react'

export function Signin (): ReactElement {
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
          <Input placeholder='Email' />
          <Input placeholder='Senha' />

          <Button
            mt={4}
            title="Avançar"
            variant='primary'
          />
        </Center>
      </VStack>
      <VStack flex={1} bg="white" px={10} pt={12}>
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
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}
