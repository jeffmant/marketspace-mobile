import { Button as NativeBaseButton, Text, type IButtonProps } from 'native-base'
import { type IconProps } from 'phosphor-react-native'
import { type ReactElement } from 'react'

type ButtonProps = IButtonProps & {
  title: string
  variant?: 'primary' | 'secondary' | 'tertiary'
  icon?: ReactElement<IconProps>
}

export function Button ({ title, variant = 'primary', icon, ...rest }: ButtonProps): ReactElement {
  return (
    <NativeBaseButton
      rounded="sm"
      borderRadius={8}
      _pressed={{
        bg: 'gray.100'
      }}
      h={12}
      w="full"
      backgroundColor={
        variant === 'primary'
          ? 'blue.400'
          : variant === 'secondary'
            ? 'gray.300'
            : 'gray.700'
      }
      {...rest}
    >
      <Text
        fontFamily="heading"
        fontSize="md"
        fontWeight={700}
        color={
          variant === 'secondary' ? 'gray.700' : 'gray.100'
        }
      >
        {title}
      </Text>

    </NativeBaseButton>
  )
}
