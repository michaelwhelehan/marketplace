import React, { FC } from 'react'
import styled from 'styled-components'
import { TaskType } from '../../../types/task'
import { borderColor, black, white } from '../../../styles/colors'
import { HeadingM } from '../../../uiComponents/atoms/Headings'
import Button from '../../../uiComponents/atoms/Button'

const Container = styled.article`
  height: 80px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${borderColor};
  position: sticky;
  top: 0;
  background-color: ${white};
`

const StyledHeading = styled(HeadingM)`
  color: ${black};
`

const StyledButton = styled(Button)`
  flex-basis: 180px;
`

interface Props {
  task: TaskType
}

const ADPHeader: FC<Props> = ({ task }) => {
  return (
    <Container>
      <StyledHeading>{task.title}</StyledHeading>
      <StyledButton>
        Make offer on {task.currency.iso}
        {task.budget}
      </StyledButton>
    </Container>
  )
}

export default ADPHeader
