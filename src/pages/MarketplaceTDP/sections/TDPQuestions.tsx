import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { black } from '../../../styles/colors'
import ConversationConnected from '../../../components/Conversation/ConversationConnected'
import { HeadingS } from '../../../uiComponents/atoms/Headings'

const Container = styled.article``

const Title = styled(HeadingS)`
  color: ${black};
  padding: 0 20px 0 20px;
`

const ConversationContainer = styled.div`
  margin-top: 10px;
`

interface Props {
  conversationId: string
}

const TDPQuestions: FC<Props> = ({ conversationId }) => {
  const [questionsCount, setQuestionsCount] = useState<number>(0)
  return (
    <Container>
      <Title>Questions ({questionsCount})</Title>
      <ConversationContainer>
        <ConversationConnected
          conversationId={conversationId}
          position="topDown"
          scrollType="windowed"
          textFieldPlaceholder="Ask a question"
          setCount={setQuestionsCount}
        />
      </ConversationContainer>
    </Container>
  )
}

export default TDPQuestions
