import React, { FC } from 'react'
import Header, { LinkType } from '../../uiComponents/molecules/Header'
import profilePictureUrl from '../../assets/images/profile.png'

const Layout: FC = ({ children }) => {
  const links: LinkType[] = [
    {
      name: 'My Tasks',
      href: '',
    },
    {
      name: 'Notifications',
      href: '',
    },
    {
      name: 'Messages',
      href: '',
    },
  ]
  return (
    <>
      <Header avatarUrl={profilePictureUrl} links={links} />
      {children}
    </>
  )
}

export default Layout
