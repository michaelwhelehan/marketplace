import React, { FC } from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'
import BaseContainer from '../atoms/Container'
import { white, borderColor, primaryFontColor } from '../../styles/colors'
import { MAIN_HEADER_HEIGHT } from '../../constants/sizes'
import Avatar from '../atoms/Avatar'
import { Link } from 'react-router-dom'
import { fwBold } from '../../styles/typography'

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

const StyledLogo = styled.img`
  margin-left: -35px;
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

export type LinkType = {
  name: string
  href: string
}

interface Props {
  links: LinkType[]
  avatarUrl?: string
}

const Header: FC<Props> = ({ links, avatarUrl }) => {
  return (
    <StyledHeader>
      <StyledContainer>
        <HeaderStart>
          <StyledLink to="/" style={{ height: '100%' }}>
            <StyledLogo width="150px" height="100%" src={logo} />
          </StyledLink>
        </HeaderStart>
        <HeaderEnd>
          <HeaderLinks>
            {links.map(link => (
              <HeaderLink>
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
