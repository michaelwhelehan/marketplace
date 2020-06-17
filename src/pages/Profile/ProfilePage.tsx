import React, { FC } from 'react'
import styled from 'styled-components'
import BaseContainer from '../../uiComponents/atoms/Container'
import UserPanel from './sections/UserPanel'
import InfoPanel, { InfoPanelSelector } from './sections/InfoPanel'

const StyledContainer = styled(BaseContainer)`
  display: flex;
`

const StartContainer = styled.div`
  margin-top: 20px;
  margin-right: 20px;
  flex-basis: 330px;

  ${InfoPanelSelector} {
    margin-top: 20px;
  }
`

const MiddleContainer = styled.div`
  margin-top: 20px;
  flex: 1;
`

const EndContainer = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  flex-basis: 300px;
`

interface Props {}

const ProfilePage: FC<Props> = () => {
  return (
    <StyledContainer>
      <StartContainer>
        <UserPanel />
        <InfoPanel />
      </StartContainer>
      <MiddleContainer></MiddleContainer>
      <EndContainer></EndContainer>
    </StyledContainer>
  )
}

export default ProfilePage