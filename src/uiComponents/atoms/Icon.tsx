import React, { FC } from 'react'
import { IconContext } from 'react-icons'

interface Props {
  name: string
  color?: string
  size?: number
  spacingStart?: boolean
  spacingEnd?: boolean
}

const Icon: FC<Props> = ({ name, color, size, spacingStart, spacingEnd }) => {
  const ReactIcon = require('react-icons/md')[name]
  return (
    <IconContext.Provider value={{ size: `${size}px`, color }}>
      <ReactIcon style={{ marginLeft: spacingStart ? '10px' : '0', marginRight: spacingEnd ? '10px' : '0' }} />
    </IconContext.Provider>
  )
}

export default Icon
