import React, { FC } from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'
import BaseContainer from '../../uiComponents/atoms/Container'
import { white, borderColor, primaryFontColor } from '../../styles/colors'
import { MAIN_HEADER_HEIGHT } from '../../constants/sizes'
import Avatar from '../../uiComponents/atoms/Avatar'
import { Link } from 'react-router-dom'
import { fwBold } from '../../styles/typography'
import profilePictureUrl from '../../assets/images/profile.png'

type LinkType = {
  name: string
  href: string
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
  &:not(:last-child) {
    margin-right: 10px;
  }

  a {
    color: ${primaryFontColor};
    ${fwBold};
    text-decoration: none;
  }
`

const Header: FC = () => {
  const links: LinkType[] = [
    {
      name: 'My Tasks',
      href: '/dashboard/tasks',
    },
    {
      name: 'Notifications',
      href: '/dashboard/notifications',
    },
    {
      name: 'Messages',
      href: '/dashboard/inbox',
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
            />
          </StyledLink>
        </HeaderStart>
        <HeaderEnd>
          <HeaderLinks>
            {links.map(link => (
              <HeaderLink key={link.href}>
                <Link to={link.href}>{link.name}</Link>
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
