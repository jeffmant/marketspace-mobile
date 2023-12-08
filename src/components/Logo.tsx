import { type ReactElement } from 'react'
import LogoSvg from '@assets/logo.svg'

export function Logo ({ size }: { size: number }): ReactElement {
  return (
    <LogoSvg width={size} height={size} />
  )
}
