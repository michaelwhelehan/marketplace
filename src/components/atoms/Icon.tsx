import React, { FC } from 'react'
import { IconContext } from 'react-icons'

interface Props {
  name: string
  color?: string
  size?: number
  marginRight?: boolean
}

const Icon: FC<Props> = ({ name, color, size, marginRight }) => {
  const ReactIcon = require('react-icons/md')[name]
  return (
    <IconContext.Provider value={{ size: `${size}px`, color }}>
      <ReactIcon siz style={{ marginRight: marginRight ? '10px' : '0' }} />
    </IconContext.Provider>
  )
}

export default Icon
