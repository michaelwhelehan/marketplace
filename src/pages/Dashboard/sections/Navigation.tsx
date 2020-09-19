import React, { FC } from 'react'
import styled from 'styled-components'
import { primaryFontColor, primaryColor } from '../../../styles/colors'
import { NavLink } from 'react-router-dom'
import Icon from '../../../uiComponents/atoms/Icon'
import { useAuth } from '../../../services'

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
    {
      icon: 'MdBusinessCenter',
      title: 'My Jobs',
      link: '/dashboard/my-jobs',
    },
    { icon: 'MdPerson', title: 'Profile', link: '/dashboard/profile' },
    { icon: 'MdSettings', title: 'Settings', link: '/dashboard/settings' },
    {
      icon: 'MdSchedule',
      title: 'Payment History',
      link: '/dashboard/payment-history',
    },
    {
      icon: 'MdMonetizationOn',
      title: 'Payment Methods',
      link: '/dashboard/payment-methods',
    },
  ]
  const { signOut } = useAuth()

  return (
    <StyledNavigation>
      {navigationItems.map((navItem) => (
        <NavigationItem key={navItem.title}>
          <NavLink
            to={navItem.link}
            exact
            activeStyle={{ color: primaryColor }}
          >
            <Icon size={20} name={navItem.icon} spacingEnd /> {navItem.title}
          </NavLink>
        </NavigationItem>
      ))}
      <NavigationItem>
        <NavLink to="/" onClick={() => signOut()}>
          <Icon size={20} name="MdExitToApp" spacingEnd /> Logout
        </NavLink>
      </NavigationItem>
    </StyledNavigation>
  )
}

export default Navigation
