import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { borderColorDark, white } from '../../styles/colors'
import { fsS } from '../../styles/typography'

interface StyledProps {
  fullWidth?: boolean
  paddingStart?: number
}

const StyledInput = styled.input<StyledProps>`
  background-color: ${white};
  border: 2px solid ${borderColorDark};
  border-radius: 4px;
  padding: 10px;
  font-size: ${fsS}px;
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

export interface TextFieldProps extends StyledProps {
  fullWidth?: boolean
  paddingStart?: number
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  value: string
}

const TextField: FC<TextFieldProps> = ({
  onChange,
  onKeyDown,
  value,
  ...props
}) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      {...props}
    />
  )
}

export default TextField
