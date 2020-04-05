import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { borderColorDark, white } from '../../styles/colors'

interface Props {
  fullWidth?: boolean
  placeholder?: string
}

const StyledInput = styled.input<Props>`
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

const TextField: FC<Props> = ({ ...props }) => {
  return <StyledInput {...props} />
}

export default TextField
