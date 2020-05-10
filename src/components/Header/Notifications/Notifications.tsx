import React, { FC } from 'react'
import { HeadingS } from '../../../uiComponents/atoms/Headings'
import styled from 'styled-components'
import { black, primaryFontColor } from '../../../styles/colors'
import Icon from '../../../uiComponents/atoms/Icon'
import Notification from './Notification'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledHeading = styled(HeadingS)`
  color: ${black};
`

const Notifications: FC = () => {
  return (
    <>
      <Header>
        <StyledHeading>Notifications</StyledHeading>
        <Icon name="MdMoreHoriz" size={30} color={primaryFontColor} />
      </Header>
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
    </>
  )
}

export default Notifications
