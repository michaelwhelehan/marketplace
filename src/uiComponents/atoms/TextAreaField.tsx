import React, { FC } from 'react'
import { TextProps, TextFieldStyles } from './TextField'
import styled, { css } from 'styled-components'

interface StyledProps {
  fullWidth?: boolean
}

const StyledTextField = styled.textarea<StyledProps>`
  ${TextFieldStyles};
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  height: 200px;
`

const StyledTextAreaField = styled(StyledTextField)``

interface TextAreaFieldProps extends TextProps {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
}

const TextAreaField: FC<TextAreaFieldProps> = React.forwardRef<
  any,
  TextAreaFieldProps
>(({ onChange, onKeyDown, value, ...props }, ref) => {
  return (
    <StyledTextAreaField
      ref={ref}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      {...props}
    />
  )
})

export default TextAreaField
