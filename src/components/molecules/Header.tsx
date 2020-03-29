import React, { FC } from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'
import BaseContainer from '../atoms/Container'
import { white, borderColor } from '../../styles/colors'

const StyledHeader = styled.header`
  height: 64px;
  border-bottom: 1px solid ${borderColor};
  background-color: ${white};
`

const StyledContainer = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledLogo = styled.img`
  margin-left: -35px;
`

const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLogo width="150px" height="100%" src={logo} />
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
