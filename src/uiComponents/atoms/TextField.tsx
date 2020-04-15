import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { borderColorDark, white } from '../../styles/colors'

interface StyledProps {
  fullWidth?: boolean
}

const StyledInput = styled.input<StyledProps>`
  background-color: ${white};
  border: 2px solid ${borderColorDark};
  border-radius: 4px;
  padding: 10px;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`

interface Props extends StyledProps {
  fullWidth?: boolean
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  value: string
}

const TextField: FC<Props> = ({ onChange, onKeyDown, value, ...props }) => {
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
