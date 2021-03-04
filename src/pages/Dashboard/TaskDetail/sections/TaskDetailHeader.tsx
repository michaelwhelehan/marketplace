import React, { FC } from 'react'
import styled from 'styled-components'
import { HeadingM } from '../../../../uiComponents/atoms/Headings'
import { black, borderColor, primaryColor } from '../../../../styles/colors'
import TaskStatusIndicator from '../../../../uiComponents/atoms/TaskStatusIndicator'
import { ParagraphL } from '../../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../../styles/typography'
import { Task_task } from '../../../MarketplaceTDP/gqlTypes/Task'

const Container = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${borderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledHeading = styled(HeadingM)`
  color: ${black};
`

const Budget = styled(ParagraphL)`
  color: ${primaryColor};
  margin-left: 20px;
  ${fwBold};
`

const EndContainer = styled.div`
  display: flex;
  align-items: center;
`

interface Props {
  task: Task_task
}

const TaskDetailHeader: FC<Props> = ({ task }) => {
  return (
    <Container>
      <StyledHeading>{task.title}</StyledHeading>
      <EndContainer>
        <TaskStatusIndicator status={task.taskStatus} />
        <Budget>
          {task.budget.currency}
          {task.budget.amount}
        </Budget>
      </EndContainer>
    </Container>
  )
}

export default TaskDetailHeader
