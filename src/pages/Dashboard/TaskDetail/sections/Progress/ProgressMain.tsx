import React, { FC } from 'react'
import styled from 'styled-components'
import {
  white,
  borderColor,
  borderColorDark,
  black,
} from '../../../../../styles/colors'
import { featherShadow } from '../../../../../styles/shadows'
import {
  ParagraphS,
  ParagraphL,
  ParagraphM,
} from '../../../../../uiComponents/atoms/Paragraphs'
import ConversationConnected from '../../../../../components/Conversation/ConversationConnected'
import { ScrollElementContextProvider } from '../../../../../contexts/ScrollElementContext'

const Container = styled.div``

const EmployerDetailsContainer = styled.div`
  display: flex;
  background-color: ${white};
  padding: 20px;
  ${featherShadow};
  border: 1px solid ${borderColor};

  ${ParagraphS} {
    margin-right: 20px;
  }
`

const TimelineStartedContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Timeline = styled.hr`
  border: 0;
  border-top: 2px solid ${borderColorDark};
  flex: 1;
`

const TimelineText = styled(ParagraphM)`
  padding: 0 10px;
`

const TimelineTextStart = styled(TimelineText)`
  color: ${black};
`

const TimelineDivider = styled(ParagraphM)`
  color: ${black};
`

const ConversationContainer = styled.div`
  margin-top: 20px;
  background-color: ${white};
  ${featherShadow};
  border: 1px solid ${borderColor};
  position: relative;
`

interface Props {}

const ProgressMain: FC<Props> = () => {
  return (
    <Container>
      <EmployerDetailsContainer>
        <ParagraphS>
          <strong>Employer:</strong> Michael W.
        </ParagraphS>
        <ParagraphS>
          <strong>Created:</strong> 2 June 2020
        </ParagraphS>
      </EmployerDetailsContainer>
      <TimelineStartedContainer>
        <Timeline />
        <TimelineTextStart>Task Started</TimelineTextStart>
        <TimelineDivider>|</TimelineDivider>
        <TimelineText>Delivery due on: 28 June 2020</TimelineText>
        <Timeline />
      </TimelineStartedContainer>
      <ConversationContainer>
        <ScrollElementContextProvider scrollElement={window}>
          <ConversationConnected position="bottomUp" scrollType="windowed" />
        </ScrollElementContextProvider>
      </ConversationContainer>
    </Container>
  )
}

export default ProgressMain
