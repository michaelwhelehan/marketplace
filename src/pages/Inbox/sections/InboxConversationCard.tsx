import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Avatar from '../../../uiComponents/atoms/Avatar'
import { convertToHTML } from 'draft-convert'
import { convertFromRaw } from 'draft-js'
import {
  ParagraphS,
  ParagraphXXS,
} from '../../../uiComponents/atoms/Paragraphs'
import { borderColor, white } from '../../../styles/colors'
import { fromNow } from '../../../utils/date'
import UserName from '../../../uiComponents/atoms/UserName'
import { UserConversations_me_conversations_edges_node } from '../gqlTypes/UserConversations'
import { User } from '../../../services/fragments/gqlTypes/User'

const StyledCard = styled.div`
  border-bottom: 1px solid ${borderColor};
  padding: 10px;
  height: 100%;
  background: ${white};
  display: flex;
  align-items: center;
  text-decoration: none;
`

const Message = styled(ParagraphS)`
  margin-top: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const MessageText = styled.span``

const PictureContainer = styled.div`
  flex: none;
`

const BodyContainer = styled.div`
  flex: 1;
  padding-left: 10px;
  overflow: hidden;
`

const TimestampContainer = styled.div`
  flex: none;
  padding-bottom: 30px;
`

interface Props {
  user: User
  conversation: UserConversations_me_conversations_edges_node
}

const InboxConversationCard: FC<Props> = ({ user, conversation }) => {
  const member = conversation.members[0]
  const lastMessage = conversation.conversationFeed.edges[0].node

  return (
    <StyledCard to={`/dashboard/inbox/${member.username}`} as={Link}>
      <PictureContainer>
        <Avatar src={member.avatarUrl} size={50} onlineStatus="offline" />
      </PictureContainer>
      <BodyContainer>
        <UserName>
          {member.firstName} {member.lastName}
        </UserName>
        <Message
          dangerouslySetInnerHTML={{
            __html: `${
              user.id === lastMessage.sentBy.id ? 'Me: ' : ''
            }${convertToHTML({
              blockToHTML: (block: any) => {
                if (block.type === 'unstyled') {
                  return <MessageText />
                }
              },
            })(convertFromRaw(lastMessage.rawBody))}`,
          }}
        />
      </BodyContainer>
      <TimestampContainer>
        <ParagraphXXS>{fromNow(lastMessage.created)}</ParagraphXXS>
      </TimestampContainer>
    </StyledCard>
  )
}

export default InboxConversationCard
