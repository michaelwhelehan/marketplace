import React, { FC, MouseEvent } from 'react'
import { IconContext } from 'react-icons'

interface Props {
  name: string
  color?: string
  size?: number
  spacingStart?: boolean | number
  spacingEnd?: boolean | number
  onClick?: (event: MouseEvent) => void
}

const Icon: FC<Props> = ({
  name,
  color,
  size,
  spacingStart,
  spacingEnd,
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

  return (
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
}

export default Icon
