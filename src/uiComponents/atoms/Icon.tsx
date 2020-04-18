import React, { FC } from 'react'
import { IconContext } from 'react-icons'

interface Props {
  name: string
  color?: string
  size?: number
  spacingStart?: boolean | number
  spacingEnd?: boolean | number
}

const Icon: FC<Props> = ({ name, color, size, spacingStart, spacingEnd }) => {
  const ReactIcon = require('react-icons/md')[name]
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
      />
    </IconContext.Provider>
  )
}

export default Icon
