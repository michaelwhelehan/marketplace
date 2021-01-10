import React, { FC } from 'react'
import { HeadingS } from '../../../uiComponents/atoms/Headings'
import styled from 'styled-components'
import { black, primaryFontColor } from '../../../styles/colors'
import Icon from '../../../uiComponents/atoms/Icon'
import Notification from './Notification'
import { UserActivity_me_activity } from '../gqlTypes/UserActivity'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledHeading = styled(HeadingS)`
  color: ${black};
`

interface Props {
  activity: UserActivity_me_activity
  onClose: (activityId: string) => void
}

const Notifications: FC<Props> = ({ activity, onClose }) => {
  return (
    <>
      <Header>
        <StyledHeading>Notifications</StyledHeading>
        <Icon name="MdMoreHoriz" size={30} color={primaryFontColor} />
      </Header>
      {activity.edges.map(({ node }) => (
        <Notification key={node.id} activityItem={node} onClose={onClose} />
      ))}
    </>
  )
}

export default Notifications
