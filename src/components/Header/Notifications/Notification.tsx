import React, { FC } from 'react'
import styled from 'styled-components'
import Avatar from '../../../uiComponents/atoms/Avatar'
import faker from 'faker'
import { ParagraphS, ParagraphXS } from '../../../uiComponents/atoms/Paragraphs'

const NotificationContainer = styled.div`
  display: flex;
  margin-top: 10px;
  cursor: pointer;
`

const NotificationStart = styled.div`
  width: 50px;
  margin-right: 10px;
`

const NotificationEnd = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Notification: FC = () => {
  return (
    <NotificationContainer>
      <NotificationStart>
        <Avatar src={faker.image.imageUrl()} size={50} />
      </NotificationStart>
      <NotificationEnd>
        <ParagraphS>
          <strong>{`${faker.name.firstName()} ${faker.name
            .lastName()
            .charAt(0)}.`}</strong>{' '}
          accepted your offer.
        </ParagraphS>
        <ParagraphXS>2 hours ago</ParagraphXS>
      </NotificationEnd>
    </NotificationContainer>
  )
}

export default Notification
