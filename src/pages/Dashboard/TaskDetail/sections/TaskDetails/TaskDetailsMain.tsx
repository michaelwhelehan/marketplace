import React, { FC } from 'react'
import TDPInfo from '../../../../../uiComponents/molecules/TaskDetail/TDPInfo'
import TDPDetails from '../../../../../uiComponents/molecules/TaskDetail/TDPDetails'
import TDPAttachments from '../../../../../uiComponents/molecules/TaskDetail/TDPAttachments'
import LineBreak from '../../../../../uiComponents/atoms/LineBreak'
import { DashboardPanelContainer } from '../../../Panels/DashboardPanel'
import { Task_task } from '../../../../MarketplaceTDP/gqlTypes/Task'
import { User } from '../../../../../services/fragments/gqlTypes/User'

interface Props {
  task: Task_task
  user: User
}

const TaskDetailsMain: FC<Props> = ({ task, user }) => {
  return (
    <DashboardPanelContainer>
      <TDPInfo task={task} editable={user.id === task.owner.id} />
      <LineBreak />
      <TDPDetails details={task.details} />
      <TDPAttachments />
    </DashboardPanelContainer>
  )
}

export default TaskDetailsMain
