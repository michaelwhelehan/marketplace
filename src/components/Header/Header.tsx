import React, { FC, useState, MouseEvent } from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'
import BaseContainer from '../../uiComponents/atoms/Container'
import { white, borderColor, darkGrey } from '../../styles/colors'
import { MAIN_HEADER_HEIGHT } from '../../constants/sizes'
import Avatar from '../../uiComponents/atoms/Avatar'
import { Link } from 'react-router-dom'
import { fwBold } from '../../styles/typography'
import profilePictureUrl from '../../assets/images/profile.png'
import DropDown from '../../uiComponents/atoms/DropDown'
import Notifications from './Notifications/Notifications'
import Icon from '../../uiComponents/atoms/Icon'

type LinkIdType = 'browse' | 'tasks' | 'updates' | 'messages'

type LinkType = {
  id: LinkIdType
  name: string
  href?: string
  onClick?: (e: MouseEvent) => void
  hasDropDown?: boolean
  renderDropDown?: () => JSX.Element
  icon: string
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
  margin-right: 20px;
`

const HeaderLink = styled.li`
  position: relative;
  &:not(:last-child) {
    margin-right: 20px;
  }

  a {
    color: ${darkGrey};
    ${fwBold};
    text-decoration: none;
    display: flex;
    align-items: center;

    span {
      margin-left: 5px;
    }
  }
`

const Header: FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<LinkIdType | null>(null)
  const links: LinkType[] = [
    {
      id: 'browse',
      name: 'Browse',
      href: '/',
      icon: 'MdSearch',
    },
    {
      id: 'tasks',
      name: 'My Tasks',
      href: '/dashboard/my-tasks',
      icon: 'MdBusinessCenter',
    },
    {
      id: 'updates',
      name: 'Updates',
      onClick: e => {
        e.preventDefault()
        setDropdownOpen(prev => (prev === 'updates' ? null : 'updates'))
      },
      hasDropDown: true,
      renderDropDown: () => <Notifications />,
      icon: 'MdNotificationsNone',
    },
    {
      id: 'messages',
      name: 'Messages',
      href: '/dashboard/inbox',
      icon: 'MdMailOutline',
    },
  ]
  const avatarUrl = profilePictureUrl

  return (
    <StyledHeader>
      <StyledContainer>
        <HeaderStart>
          <StyledLink to="/" style={{ height: '100%' }}>
            <img
              alt="Logo"
              height="100%"
              width="200px"
              src={`${logo}#svgView(viewBox(70,20,100,60))`}
              importance="high"
            />
          </StyledLink>
        </HeaderStart>
        <HeaderEnd>
          <HeaderLinks>
            {links.map(link => (
              <HeaderLink key={link.name}>
                <Link onClick={link.onClick} to={link.href}>
                  <Icon name={link.icon} size={25} /> <span>{link.name}</span>
                </Link>
                {link.hasDropDown && dropdownOpen === link.id ? (
                  <DropDown position="end">{link.renderDropDown()}</DropDown>
                ) : null}
              </HeaderLink>
            ))}
          </HeaderLinks>
          {avatarUrl ? (
            <StyledLink to="/dashboard">
              <Avatar src={avatarUrl} size={50} />
            </StyledLink>
          ) : null}
        </HeaderEnd>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
