import { FormControl, Input as NativeBaseInput, type IInputProps } from 'native-base'
import { type ReactElement } from 'react'

type InputProps = IInputProps & {
  errorMessage?: string
}

export function Input ({ errorMessage, isInvalid, ...rest }: InputProps): ReactElement {
  const invalid = !!errorMessage || isInvalid
  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        fontFamily="body"
        fontSize="md"
        color="gray.700"
        placeholderTextColor="gray.400"
        backgroundColor="white"
        w="100%"
        h={12}
        px={4}
        borderWidth={0}
        borderRadius={8}
        isInvalid={isInvalid}
        _focus={{
          borderWidth: '1',
          borderStyle: 'solid',
          borderColor: 'gray.700'
        }}
        {...rest}
      />
        <FormControl.ErrorMessage _text={{ color: 'red.light' }}>
          {errorMessage}
        </FormControl.ErrorMessage>
    </FormControl>
  )
}
