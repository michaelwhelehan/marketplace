import React, { FC } from 'react'
import styled from 'styled-components'
import UserStats from '../../../../../uiComponents/molecules/UserStats'
import DashboardPanel from '../../../Panels/DashboardPanel'

const BodyContainer = styled.div`
  padding: 20px;
`

interface Props {}

const TaskDetailsSummary: FC<Props> = () => {
  return (
    <DashboardPanel title="About the Employer">
      <BodyContainer>
        <UserStats />
      </BodyContainer>
    </DashboardPanel>
  )
}

export default TaskDetailsSummary
