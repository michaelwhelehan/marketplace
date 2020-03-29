import React, { FC } from 'react'
import Header from '../molecules/Header'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
