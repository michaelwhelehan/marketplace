import React, { FC, useRef } from 'react'
import { DashboardPanelContainer } from '../../../Panels/DashboardPanel'
import { Task_task } from '../../../../MarketplaceTDP/gqlTypes/Task'
import ConversationConnected from '../../../../../components/Conversation/ConversationConnected'
import { ScrollElementContextProvider } from '../../../../../contexts/ScrollElementContext'

interface Props {
  task: Task_task
}

const QuestionsMain: FC<Props> = ({ task }) => {
  const scrollElement = useRef(null)

  return (
    <DashboardPanelContainer ref={scrollElement}>
      <ScrollElementContextProvider scrollElement={scrollElement}>
        <ConversationConnected
          conversationId={task.conversationId}
          position="topDown"
          scrollType="windowed"
          textFieldPlaceholder="Ask a question"
        />
      </ScrollElementContextProvider>
    </DashboardPanelContainer>
  )
}

export default QuestionsMain
