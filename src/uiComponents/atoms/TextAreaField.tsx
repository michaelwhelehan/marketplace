import React, { FC } from 'react'
import { TextProps, TextFieldStyles } from './TextField'
import styled, { css } from 'styled-components'
import { red } from '../../styles/colors'

interface StyledProps {
  fullWidth?: boolean
  short?: boolean
  hasError?: boolean
}

const StyledTextField = styled.textarea<StyledProps>`
  ${TextFieldStyles};
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  height: ${({ short }) => (short ? '100px' : '200px')};
  resize: none;
  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${red};
    `}
`

const StyledTextAreaField = styled(StyledTextField)``

interface TextAreaFieldProps extends TextProps {
  short?: boolean
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
