import React, { FC } from 'react'
import styled from 'styled-components'
import { fsXXS } from '../../styles/typography'
import { primaryFontColor } from '../../styles/colors'
import Avatar from '../atoms/Avatar'
import { UserType } from '../../types/user'

const MessageContainerOuter = styled.div`
  height: 100%;
  padding-top: 15px;
  padding-right: 20px;
  padding-bottom: 15px;
`

const MessageContainer = styled.div`
  height: 100%;
  display: flex;
`

const MessageMemberAvatar = styled.div`
  width: 60px;
  padding-right: 10px;
`

const MessageContent = styled.div`
  flex: 1;
`

const MessageTimestamp = styled.span`
  padding-left: 10px;
  padding-top: 2px;
  font-size: ${fsXXS}px;
  color: ${primaryFontColor};
`

interface Props {
  user: UserType
  comment: string
}

const Review: FC<Props> = ({ user, comment }) => {
  return (
    <MessageContainerOuter>
      <MessageContainer>
        <MessageMemberAvatar>
          <Avatar
            src={user.profilePictureUrl}
            size={50}
            onlineStatus="online"
          />
        </MessageMemberAvatar>
        <MessageContent>{comment}</MessageContent>
      </MessageContainer>
    </MessageContainerOuter>
  )
}

export default Review
