import React, { FC } from 'react'
import styled from 'styled-components'
import StatusIndicator from '../../../uiComponents/atoms/StatusIndicator'
import { ParagraphS } from '../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../styles/typography'
import { MemberType } from '../../../types/user'
import { fromNow } from '../../../utils/date'
import { black } from '../../../styles/colors'

const Container = styled.article`
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Member = styled.div`
  display: flex;
  align-items: center;
`

const MemberName = styled(ParagraphS)`
  ${fwBold};
  color: ${black};
  margin-left: 5px;
`

const LastSeen = styled.div`
  margin-top: 5px;
`

interface Props {
  member: MemberType
}

const InboxConversationTitle: FC<Props> = ({ member }) => {
  return (
    <Container>
      <Member>
        <StatusIndicator onlineStatus={member.onlineStatus} />
        <MemberName>{member.name}</MemberName>
      </Member>
      <LastSeen>
        <ParagraphS>Last seen {fromNow(member.lastSeen)}</ParagraphS>
      </LastSeen>
    </Container>
  )
}

export default InboxConversationTitle
