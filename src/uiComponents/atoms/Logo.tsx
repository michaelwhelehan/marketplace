import React, { FC } from 'react'
import logo from '../../assets/images/ambalogo.svg'

const Logo: FC = () => {
  return (
    <img
      alt="Logo"
      height="100%"
      width="200px"
      src={`${logo}#svgView(viewBox(170,0,280,200))`}
      importance="high"
    />
  )
}

export default Logo
