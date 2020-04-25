import React, { FC } from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'
import BaseContainer from '../atoms/Container'
import { white, borderColor } from '../../styles/colors'
import { MAIN_HEADER_HEIGHT } from '../../constants/sizes'
import profilePictureUrl from '../../assets/images/profile.png'
import Avatar from '../atoms/Avatar'
import { Link } from 'react-router-dom'

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

const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <HeaderStart>
          <StyledLink to="/" style={{ height: '100%' }}>
            <StyledLogo width="150px" height="100%" src={logo} />
          </StyledLink>
        </HeaderStart>
        <HeaderEnd>
          <StyledLink to="/dashboard">
            <Avatar src={profilePictureUrl} size={50} />
          </StyledLink>
        </HeaderEnd>
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
