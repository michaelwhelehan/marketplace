import React, { FC } from 'react'
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
  height: 400px;
`

const ADPQuestions: FC = () => {
  return (
    <Container>
      <Title>Questions (10)</Title>
      <ConversationContainer>
        <ConversationConnected position="topDown" scrollType="windowed" />
      </ConversationContainer>
    </Container>
  )
}

export default ADPQuestions
