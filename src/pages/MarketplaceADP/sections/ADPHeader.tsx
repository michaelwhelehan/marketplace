import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { TaskType } from '../../../types/task'
import { borderColor, black, white } from '../../../styles/colors'
import { HeadingM } from '../../../uiComponents/atoms/Headings'
import Button from '../../../uiComponents/atoms/Button'

const Container = styled.section<{ scrolling?: boolean }>`
  height: 80px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${borderColor};
  position: sticky;
  top: 0;
  background-color: ${white};
  z-index: 997;

  ${({ scrolling }) =>
    scrolling &&
    css`
      box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.1);
    `}
`

const StyledHeading = styled(HeadingM)`
  color: ${black};
`

const StyledButton = styled(Button)`
  flex-basis: 250px;
`

interface Props {
  task: TaskType
}

const ADPHeader: FC<Props> = ({ task }) => {
  return (
    <Container>
      <StyledHeading>{task.title}</StyledHeading>
      <StyledButton large>
        Make offer on {task.currency.iso}
        {task.budget}
      </StyledButton>
    </Container>
  )
}

export default ADPHeader
