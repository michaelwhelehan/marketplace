import React, { FC, MouseEvent } from 'react'
import styled, { css } from 'styled-components'
import { borderColor, black, white } from '../../../styles/colors'
import { HeadingM } from '../../../uiComponents/atoms/Headings'
import Button from '../../../uiComponents/atoms/Button'
import { Task_task } from '../gqlTypes/Task'
import { User } from '../../../services/fragments/gqlTypes/User'
import { Offers_offers } from '../../Marketplace/gqlTypes/Offers'

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
  user: User
  offers?: Offers_offers
  task: Task_task
  onMakeOfferClick: (event: MouseEvent) => void
}

const TDPHeader: FC<Props> = ({ user, offers, task, onMakeOfferClick }) => {
  return (
    <Container>
      <StyledHeading>{task.title}</StyledHeading>
      {user.id !== task.owner.id &&
        !offers?.edges?.some(({ node }) => node.createdBy.id === user.id) && (
          <StyledButton large onClick={onMakeOfferClick}>
            Make offer on {task.budget.currency}
            {task.budget.amount}
          </StyledButton>
        )}
    </Container>
  )
}

export default TDPHeader
