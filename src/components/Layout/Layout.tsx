import React, { FC } from 'react'
import Header from '../Header/Header'
import CreateTask from '../CreateTask/CreateTask'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <CreateTask />
    </>
  )
}

export default Layout
