import React, { FC } from 'react'
import styled from 'styled-components'
import { DashboardPanelContainer } from '../../Dashboard/Panels/DashboardPanel'
import { UserType, OnlineStatusType } from '../../../types/user'
import faker from 'faker'
import UserCard from '../../../uiComponents/molecules/UserCard'
import UserStats from '../../../uiComponents/molecules/UserStats'
import Button from '../../../uiComponents/atoms/Button'

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  ${Button}:first-child {
    margin-right: 10px;
  }
`

interface Props {}

const UserPanel: FC<Props> = () => {
  const user: UserType = {
    profilePictureUrl: faker.image.avatar(),
    name: `${faker.name.firstName()} ${faker.name.lastName().charAt(0)}.`,
    onlineStatus: 'online' as OnlineStatusType,
    lastSeen: new Date(),
    jobTitle: 'Web Developer',
    rating: 4.8,
    numRatings: 10,
  }
  return (
    <DashboardPanelContainer padded>
      <UserCard user={user} />
      <ButtonContainer>
        <Button styleType="primary-outline">Message</Button>
        <Button>Request a Quote</Button>
      </ButtonContainer>
      <UserStats />
    </DashboardPanelContainer>
  )
}

export default UserPanel
