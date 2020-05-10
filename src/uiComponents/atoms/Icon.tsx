import React, { FC, MouseEvent } from 'react'
import { IconContext } from 'react-icons'
import styled from 'styled-components'
import { lightGrey } from '../../styles/colors'

const IconContainer = styled.div<{ size: number }>`
  border-radius: 50%;
  background-color: ${lightGrey};
  width: ${({ size }) => `${size + 20}px`};
  height: ${({ size }) => `${size + 20}px`};
  display: flex;
  align-items: center;
  justify-content: center;
`

interface Props {
  name: string
  color?: string
  size?: number
  spacingStart?: boolean | number
  spacingEnd?: boolean | number
  contained?: boolean
  onClick?: (event: MouseEvent) => void
}

const Icon: FC<Props> = ({
  name,
  color,
  size,
  spacingStart,
  spacingEnd,
  contained,
  onClick,
  ...props
}) => {
  let ReactIcon
  if (name.startsWith('Md')) {
    ReactIcon = require('react-icons/md')[name]
  } else if (name.startsWith('Fa')) {
    ReactIcon = require('react-icons/fa')[name]
  }

  if (!ReactIcon) {
    throw new Error('Unknown icon')
  }

  if (spacingStart === true) {
    spacingStart = 10
  }
  if (spacingEnd === true) {
    spacingEnd = 10
  }

  const icon = (
    <IconContext.Provider value={{ size: `${size}px`, color }}>
      <ReactIcon
        style={{
          marginLeft: spacingStart ? `${spacingStart}px` : '0',
          marginRight: spacingEnd ? `${spacingEnd}px` : '0',
        }}
        onClick={onClick}
        {...props}
      />
    </IconContext.Provider>
  )

  if (contained) {
    return <IconContainer size={size}>{icon}</IconContainer>
  }

  return icon
}

export default Icon
