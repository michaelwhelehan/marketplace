import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { borderColorDark, white } from '../../styles/colors'
import { fsS, fontFamilyPrimary } from '../../styles/typography'

interface StyledProps {
  fullWidth?: boolean
  paddingStart?: number
}

export const TextFieldStyles = css`
  background-color: ${white};
  border: 2px solid ${borderColorDark};
  border-radius: 4px;
  padding: 8px;
  ${fontFamilyPrimary};
  font-size: ${fsS}px;
`

const StyledTextField = styled.input<StyledProps>`
  ${TextFieldStyles};
  ${({ paddingStart }) =>
    paddingStart &&
    css`
      padding-left: ${paddingStart}px;
    `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`

export interface TextProps extends StyledProps {
  placeholder?: string
  autoFocus?: boolean
  value?: string
  defaultValue?: string
  name?: string
  ref?: any
}

export interface TextFieldProps extends TextProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const TextField: FC<TextFieldProps> = React.forwardRef<any, TextFieldProps>(
  ({ onChange, onKeyDown, value, ...props }, ref) => {
    return (
      <StyledTextField
        ref={ref}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        {...props}
      />
    )
  },
)

export default TextField
