import React, { FC, useState, MouseEvent } from 'react'
import styled from 'styled-components'
import BaseContainer from '../../uiComponents/atoms/Container'
import { white, borderColor, darkGrey } from '../../styles/colors'
import { MAIN_HEADER_HEIGHT } from '../../constants/sizes'
import Avatar from '../../uiComponents/atoms/Avatar'
import { Link } from 'react-router-dom'
import { fwBold } from '../../styles/typography'
import DropDown from '../../uiComponents/atoms/DropDown'
import Notifications from './Notifications/Notifications'
import Icon from '../../uiComponents/atoms/Icon'
import UpdateIndicator from '../../uiComponents/atoms/UpdateIndicator'
import Logo from '../../uiComponents/atoms/Logo'
import { useAuth } from '../../services'

type LinkIdType = 'browse' | 'tasks' | 'updates' | 'messages'

type LinkType = {
  id: LinkIdType
  name: string
  href?: string
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
  hasDropDown?: boolean
  renderDropDown?: () => JSX.Element
  icon?: string
  hasUpdates?: boolean
}

const StyledHeader = styled.header`
  height: ${MAIN_HEADER_HEIGHT}px;
  border-bottom: 1px solid ${borderColor};
  background-color: ${white};
`

const StyledContainer = styled(BaseContainer)`
  display: flex;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  display: block;
`

const HeaderStart = styled.div``

const HeaderEnd = styled.div`
  display: flex;
  align-items: center;
`

const HeaderLinks = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 20px;
`

const HeaderItem = styled.li`
  position: relative;
  &:not(:last-child) {
    margin-right: 20px;
  }
`

const HeaderLink = styled(Link)`
  color: ${darkGrey};
  ${fwBold};
  text-decoration: none;
  display: flex;
  align-items: center;
`

const HeaderLinkIcon = styled.span`
  position: relative;
  margin-right: 5px;
`

const Header: FC = () => {
  const { user } = useAuth()
  const [dropdownOpen, setDropdownOpen] = useState<LinkIdType | null>(null)
  const links = [
    user && {
      id: 'browse',
      name: 'Browse',
      href: '/',
      icon: 'MdSearch',
    },
    user && {
      id: 'tasks',
      name: 'My Tasks',
      href: '/dashboard/my-tasks',
      icon: 'MdBusinessCenter',
    },
    user && {
      id: 'updates',
      name: 'Updates',
      onClick: (e) => {
        e.preventDefault()
        setDropdownOpen((prev) => (prev === 'updates' ? null : 'updates'))
      },
      hasDropDown: true,
      renderDropDown: () => <Notifications />,
      icon: 'MdNotificationsNone',
      hasUpdates: true,
    },
    user && {
      id: 'messages',
      name: 'Messages',
      href: '/dashboard/inbox',
      icon: 'MdMailOutline',
      hasUpdates: true,
    },
    !user && {
      id: 'login',
      name: 'Log in',
      href: '/login',
    },
    !user && {
      id: 'signup',
      name: 'Sign up',
      href: '/sign-up',
    },
  ].filter(Boolean)

  return (
    <StyledHeader>
      <StyledContainer>
        <HeaderStart>
          <StyledLink to="/" style={{ height: '100%' }}>
            <Logo />
          </StyledLink>
        </HeaderStart>
        <HeaderEnd>
          <HeaderLinks>
            {links.map((link) => (
              <HeaderItem key={link.name}>
                <HeaderLink onClick={link.onClick} to={link.href}>
                  {link.icon ? (
                    <HeaderLinkIcon>
                      <Icon name={link.icon} size={25} />
                      {link.hasUpdates && <UpdateIndicator />}
                    </HeaderLinkIcon>
                  ) : null}
                  <span>{link.name}</span>
                </HeaderLink>
                {link.hasDropDown && dropdownOpen === link.id ? (
                  <DropDown position="end">{link.renderDropDown()}</DropDown>
                ) : null}
              </HeaderItem>
            ))}
          </HeaderLinks>
          {user ? (
            <StyledLink to="/dashboard">
              <Avatar src={user.avatarUrl} size={50} />
            </StyledLink>
          ) : null}
        </HeaderEnd>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
