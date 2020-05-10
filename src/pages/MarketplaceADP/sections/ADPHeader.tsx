import React, { FC, MouseEvent } from 'react'
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
  z-index: 97;

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
  onMakeOfferClick: (event: MouseEvent) => void
}

const ADPHeader: FC<Props> = ({ task, onMakeOfferClick }) => {
  return (
    <Container>
      <StyledHeading>{task.title}</StyledHeading>
      <StyledButton large onClick={onMakeOfferClick}>
        Make offer on {task.currency.iso}
        {task.budget}
      </StyledButton>
    </Container>
  )
}

export default ADPHeader
