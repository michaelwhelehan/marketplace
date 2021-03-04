import React, { FC } from 'react'
import styled from 'styled-components'
import { ParagraphS } from '../../atoms/Paragraphs'
import { black, primaryFontColor } from '../../../styles/colors'
import { fwBold } from '../../../styles/typography'
import Avatar from '../../atoms/Avatar'
import { ConversationMemberProfile_publicUser } from '../../../components/Conversation/gqlTypes/ConversationMemberProfile'

const WelcomeMessage = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
`

const WelcomeMessageStart = styled.div`
  width: 50px;
`

const WelcomeMessageEnd = styled.div`
  flex: 1;
`

const WelcomeMessageHeading = styled(ParagraphS)`
  ${fwBold};
  color: ${black};
`

const WelcomeMessageBody = styled(ParagraphS)`
  margin-top: 5px;
  color: ${primaryFontColor};
`

export interface ConversationWelcomeMessageProps {
  member: ConversationMemberProfile_publicUser
}

const ConversationWelcomeMessage: FC<ConversationWelcomeMessageProps> = ({
  member,
}) => {
  return (
    <WelcomeMessage>
      <WelcomeMessageStart>
        <Avatar src={member.avatarUrl} size={35} />
      </WelcomeMessageStart>
      <WelcomeMessageEnd>
        <WelcomeMessageHeading>
          Say hello to {member.firstName} {member.lastName}!
        </WelcomeMessageHeading>
        <WelcomeMessageBody>
          Tell them everything they need to know about your job.
        </WelcomeMessageBody>
      </WelcomeMessageEnd>
    </WelcomeMessage>
  )
}

export default ConversationWelcomeMessage
