import React, { FC } from 'react'

interface Props {
  name: string
  marginRight?: boolean
}

const Icon: FC<Props> = ({ name, marginRight }) => {
  const ReactIcon = require('react-icons/md')[name]
  return <ReactIcon style={{ marginRight: marginRight ? '10px' : '0' }} />
}

export default Icon
