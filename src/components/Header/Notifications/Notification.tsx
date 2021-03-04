import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { darkGrey, featherGrey, primaryColor } from '../../../styles/colors'
import Avatar from '../../../uiComponents/atoms/Avatar'
import { ParagraphXS } from '../../../uiComponents/atoms/Paragraphs'
import { fromNow } from '../../../utils/date'
import { UserActivity_me_activity_edges_node } from '../gqlTypes/UserActivity'

const NotificationContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;

  &:hover {
    background-color: ${featherGrey};
  }
`

const NotificationStart = styled.div`
  width: 50px;
  margin-right: 10px;
`

const NotificationMiddle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const NotificationEnd = styled.div`
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

const NotificationText = styled(ParagraphXS)<{ read: boolean }>`
  ${({ read }) =>
    !read &&
    css`
      color: ${darkGrey};
    `}

  > span {
    font-weight: bold;
  }
`

const NotificationTimestamp = styled(ParagraphXS)<{ read: boolean }>`
  ${({ read }) =>
    !read &&
    css`
      color: ${primaryColor};
      font-weight: bold;
    `}
`

const UnreadIndicator = styled.span`
  background-color: ${primaryColor};
  width: 12px;
  height: 12px;
  border-radius: 50%;
`

function getTargetSubject(activityItem: UserActivity_me_activity_edges_node) {
  if (activityItem.targetObject) {
    switch (activityItem.targetObject.__typename) {
      case 'Task':
        return activityItem.targetObject.title
    }
  }

  return ''
}

function getActionObjectUrl(activityItem: UserActivity_me_activity_edges_node) {
  if (activityItem.actionObject && activityItem.targetObject) {
    if (
      activityItem.actionObject.__typename === 'Offer' &&
      activityItem.targetObject.__typename === 'Task'
    ) {
      return `/jobs/${activityItem.targetObject.slug}/offers`
    }

    if (
      activityItem.actionObject.__typename === 'ConversationMessage' &&
      activityItem.targetObject.__typename === 'Task'
    ) {
      return `/jobs/${activityItem.targetObject.slug}/questions`
    }
  }

  return ''
}

interface Props {
  activityItem: UserActivity_me_activity_edges_node
  onClose: (activityId: string) => void
}

const Notification: FC<Props> = ({ activityItem, onClose }) => {
  return (
    <NotificationContainer
      to={getActionObjectUrl(activityItem)}
      onClick={() => onClose(activityItem.id)}
    >
      <NotificationStart>
        <Avatar src={activityItem.actorObject.avatarUrl} size={50} />
      </NotificationStart>
      <NotificationMiddle>
        <NotificationText read={activityItem.read}>
          <span>
            {activityItem.actorObject.firstName}{' '}
            {activityItem.actorObject.lastName}
          </span>{' '}
          {activityItem.verb} {getTargetSubject(activityItem)}
        </NotificationText>
        <NotificationTimestamp read={activityItem.read}>
          {fromNow(activityItem.timestamp)}
        </NotificationTimestamp>
      </NotificationMiddle>
      <NotificationEnd>
        {!activityItem.read && <UnreadIndicator />}
      </NotificationEnd>
    </NotificationContainer>
  )
}

export default Notification
