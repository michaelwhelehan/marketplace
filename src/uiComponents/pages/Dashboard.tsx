import React, { FC } from 'react'
import styled from 'styled-components'
import BaseContainer from '../atoms/Container'
import Button from '../atoms/Button'
import {
  borderColor,
  offWhite,
  white,
  primaryFontColor,
} from '../../styles/colors'
import { Link } from 'react-router-dom'
import Icon from '../atoms/Icon'
import { MAIN_HEADER_HEIGHT } from '../../constants/sizes'

const StyledContainer = styled(BaseContainer)`
  border-left: 1px solid ${borderColor};
  border-right: 1px solid ${borderColor};
  min-height: calc(100vh - ${MAIN_HEADER_HEIGHT}px);
  display: flex;
`

const SideListContainer = styled.article`
  flex-basis: 200px;
  padding: 20px;
  border-right: 1px solid ${borderColor};
  background-color: ${white};
`

const MainContainer = styled.article`
  flex: 1;
  padding-left: 20px;
  padding-top: 20px;
  background-color: ${offWhite};
`

const Navigation = styled.ul`
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

const navigationItems: NavigationItemType[] = [
  { icon: 'MdDashboard', title: 'Dashboard', link: '/dashboard' },
  { icon: 'MdEmail', title: 'Messages', link: '/dashboard/inbox' },
  { icon: 'MdWork', title: 'Tasks', link: '' },
  { icon: 'MdPerson', title: 'Profile', link: '' },
  { icon: 'MdMonetizationOn', title: 'Payment Methods', link: '' },
  { icon: 'MdExitToApp', title: 'Logout', link: '' },
]

const Dashboard: FC = () => {
  return (
    <>
      <StyledContainer>
        <SideListContainer>
          <Button fullWidth>Create Task</Button>
          <Navigation>
            {navigationItems.map(navItem => (
              <NavigationItem key={navItem.title}>
                <Link to={navItem.link}>
                  <Icon size={20} name={navItem.icon} spacingEnd />{' '}
                  {navItem.title}
                </Link>
              </NavigationItem>
            ))}
          </Navigation>
        </SideListContainer>
        <MainContainer>This is your dashboard</MainContainer>
      </StyledContainer>
    </>
  )
}

export default Dashboard
