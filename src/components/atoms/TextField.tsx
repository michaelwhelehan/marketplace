import React, { FC, useState, useCallback } from 'react'
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
  const [value, setValue] = useState<string>('')

  const handleChange = useCallback(e => {
    setValue(e.target.value)
  }, [])

  const handleKeyPress = useCallback(e => {
    if (e.keyCode === 13) {
      console.log('value', e.target.value)
    }
  }, [])

  return (
    <StyledInput
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      {...props}
    />
  )
}

export default TextField
