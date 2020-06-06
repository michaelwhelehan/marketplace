import React, { FC } from 'react'
import styled from 'styled-components'
import { white, black, borderColor } from '../../../../../styles/colors'
import { HeadingS } from '../../../../../uiComponents/atoms/Headings'
import UserStats from '../../../../../uiComponents/molecules/UserStats'
import { featherShadow } from '../../../../../styles/shadows'

const Container = styled.div`
  background-color: ${white};
  border: 1px solid ${borderColor};
  ${featherShadow};
`

const Header = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${borderColor};
`

const Body = styled.div`
  padding: 20px;
`

const StyledHeading = styled(HeadingS)`
  color: ${black};
`

interface Props {}

const TaskDetailsSummary: FC<Props> = () => {
  return (
    <Container>
      <Header>
        <StyledHeading>About the Employer</StyledHeading>
      </Header>
      <Body>
        <UserStats />
      </Body>
    </Container>
  )
}

export default TaskDetailsSummary
