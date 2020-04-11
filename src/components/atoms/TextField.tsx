import React, { FC, useState, useCallback } from 'react'
import styled, { css } from 'styled-components'
import { borderColorDark, white } from '../../styles/colors'

interface Props {
  fullWidth?: boolean
  placeholder?: string
  onEnter?: (value: string) => void
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

const TextField: FC<Props> = ({ onEnter, ...props }) => {
  const [value, setValue] = useState<string>('')

  const handleChange = useCallback(e => {
    setValue(e.target.value)
  }, [])

  const handleKeyPress = useCallback(
    e => {
      if (e.keyCode === 13) {
        if (onEnter) {
          onEnter(value)
        }
        setValue('')
      }
    },
    [onEnter, value],
  )

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
