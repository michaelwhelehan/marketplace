import React, { FC } from 'react'
import styled from 'styled-components'
import { primaryFontColor } from '../../../styles/colors'
import { Link } from 'react-router-dom'
import Icon from '../../../uiComponents/atoms/Icon'

const StyledNavigation = styled.ul`
  margin-top: 20px;
`

const NavigationItem = styled.li`
  margin-bottom: 20px;
  > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    color: ${primaryFontColor};
  }
`

type NavigationItemType = {
  icon: string
  title: string
  link: string
}

const Navigation: FC = () => {
  const navigationItems: NavigationItemType[] = [
    { icon: 'MdDashboard', title: 'Dashboard', link: '/dashboard' },
    { icon: 'MdEmail', title: 'Messages', link: '/dashboard/inbox' },
    { icon: 'MdWork', title: 'Tasks', link: '' },
    { icon: 'MdPerson', title: 'Profile', link: '/dashboard/profile' },
    { icon: 'MdSettings', title: 'Settings', link: '' },
    { icon: 'MdSchedule', title: 'Payment History', link: '' },
    { icon: 'MdMonetizationOn', title: 'Payment Methods', link: '' },
    { icon: 'MdExitToApp', title: 'Logout', link: '' },
  ]

  return (
    <StyledNavigation>
      {navigationItems.map(navItem => (
        <NavigationItem key={navItem.title}>
          <Link to={navItem.link}>
            <Icon size={20} name={navItem.icon} spacingEnd /> {navItem.title}
          </Link>
        </NavigationItem>
      ))}
    </StyledNavigation>
  )
}

export default Navigation
