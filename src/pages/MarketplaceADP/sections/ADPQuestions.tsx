import React, { FC } from 'react'
import styled from 'styled-components'
import { black } from '../../../styles/colors'
import { ParagraphS } from '../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../styles/typography'
import ConversationConnected from '../../../components/Conversation/ConversationConnected'

const Container = styled.article`
  padding: 20px;
`

const Title = styled(ParagraphS)`
  color: ${black};
  ${fwBold};
  text-transform: uppercase;
`

const ConversationContainer = styled.div`
  margin-top: 10px;
  height: 300px;
`

const ADPQuestions: FC = () => {
  return (
    <Container>
      <Title>Questions (10)</Title>
      <ConversationContainer>
        <ConversationConnected position="topDown" />
      </ConversationContainer>
    </Container>
  )
}

export default ADPQuestions
