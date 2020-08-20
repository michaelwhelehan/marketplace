import React, { FC } from 'react'
import styled from 'styled-components'
import BaseContainer from '../../uiComponents/atoms/Container'
import UserPanel from './sections/UserPanel'
import InfoPanel, { InfoPanelSelector } from './sections/InfoPanel'
import MainPanel from './sections/MainPanel'
import ReviewPanel from './sections/ReviewPanel'
import { useGetPublicUserProfileQuery } from './queries'
import { useRouteMatch } from 'react-router-dom'
import { Facebook as FacebookLoader } from 'react-content-loader'

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
  flex-basis: 330px;
`

interface Props {}

const ProfilePage: FC<Props> = () => {
  const match = useRouteMatch<{ username: string }>()
  const { data: User, loading } = useGetPublicUserProfileQuery(
    match.params.username,
  )

  if (loading) {
    return <FacebookLoader />
  }

  return (
    <StyledContainer>
      <StartContainer>
        <UserPanel user={User.publicUser} />
        <InfoPanel user={User.publicUser} />
      </StartContainer>
      <MiddleContainer>
        <MainPanel user={User.publicUser} />
      </MiddleContainer>
      {/* <EndContainer>
        <ReviewPanel />
      </EndContainer> */}
    </StyledContainer>
  )
}

export default ProfilePage
