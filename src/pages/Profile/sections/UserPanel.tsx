import React, { FC } from 'react'
import styled from 'styled-components'
import { DashboardPanelContainer } from '../../Dashboard/Panels/DashboardPanel'
import { UserType, OnlineStatusType } from '../../../types/user'
import UserCard from '../../../uiComponents/molecules/UserCard'
import UserStats from '../../../uiComponents/molecules/UserStats'
import Button from '../../../uiComponents/atoms/Button'
import { PublicUserProfile_publicUser } from '../gqlTypes/PublicUserProfile'

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  ${Button}:first-child {
    margin-right: 10px;
  }
`

interface Props {
  user: PublicUserProfile_publicUser
}

const UserPanel: FC<Props> = ({ user }) => {
  const userData: UserType = {
    profilePictureUrl: user.avatarUrl,
    name: `${user.firstName} ${user.lastName}`,
    onlineStatus: 'offline' as OnlineStatusType,
    lastSeen: new Date(),
    jobTitle: user.jobTitle,
  }
  return (
    <DashboardPanelContainer padded>
      <UserCard user={userData} />
      {/* <ButtonContainer>
        <Button styleType="primary-outline">Message</Button>
        <Button>Request a Quote</Button>
      </ButtonContainer>
      <UserStats /> */}
    </DashboardPanelContainer>
  )
}

export default UserPanel
