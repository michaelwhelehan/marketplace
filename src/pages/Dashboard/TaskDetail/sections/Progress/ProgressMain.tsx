import React, { FC } from 'react'
import styled from 'styled-components'
import { borderColorDark, black } from '../../../../../styles/colors'
import {
  ParagraphS,
  ParagraphM,
} from '../../../../../uiComponents/atoms/Paragraphs'
import ConversationConnected from '../../../../../components/Conversation/ConversationConnected'
import { ScrollElementContextProvider } from '../../../../../contexts/ScrollElementContext'
import { DashboardPanelContainer } from '../../../Panels/DashboardPanel'
import { ConversationCategory } from '../../../../../types/conversation'

const Container = styled.div``

const EmployerDetailsContainer = styled(DashboardPanelContainer)`
  display: flex;

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

const ConversationContainer = styled(DashboardPanelContainer)`
  margin-top: 20px;
`

interface Props {}

const ProgressMain: FC<Props> = () => {
  return (
    <Container>
      <EmployerDetailsContainer padded>
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
          <ConversationConnected
            conversationCategory={ConversationCategory.ORDER}
            conversationId="Q29udmVyc2F0aW9uOjE="
            position="bottomUp"
            scrollType="windowed"
          />
        </ScrollElementContextProvider>
      </ConversationContainer>
    </Container>
  )
}

export default ProgressMain
