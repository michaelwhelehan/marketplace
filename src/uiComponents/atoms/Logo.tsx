import React, { FC } from 'react'
import logo from '../../assets/images/logo.svg'

const Logo: FC = () => {
  return (
    <img
      alt="Logo"
      height="100%"
      width="200px"
      src={`${logo}#svgView(viewBox(70,20,100,60))`}
      importance="high"
    />
  )
}

export default Logo
