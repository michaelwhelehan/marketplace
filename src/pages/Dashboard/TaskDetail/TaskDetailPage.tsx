import React, { FC } from 'react'
import styled from 'styled-components'
import BaseContainer from '../../../uiComponents/atoms/Container'
import { white } from '../../../styles/colors'
import TaskDetailHeader from './sections/TaskDetailHeader'
import TaskDetailTabs from './sections/TaskDetailTabs'
import { TabType } from './types'
import useTabs from '../../../hooks/useTabs'
import TaskDetailsMain from './sections/TaskDetails/TaskDetailsMain'
import TaskDetailsSummary from './sections/TaskDetails/TaskDetailsSummary'
import OffersMain from './sections/Offers/OffersMain'
import OffersSummary from './sections/Offers/OffersSummary'
import HiresMain from './sections/Hires/HiresMain'
import HiresSummary from './sections/Hires/HiresSummary'
import ProgressMain from './sections/Progress/ProgressMain'
import ProgressSummary from './sections/Progress/ProgressSummary'

const StyledContainer = styled(BaseContainer)``

const TopContainer = styled.div`
  margin-top: 20px;
  background-color: ${white};
  width: 100%;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.05);
`

const BottomContainer = styled.div`
  margin-top: 20px;
  display: flex;
`

const BottomContainerStart = styled.main`
  flex: 1;
  margin-right: 20px;
`

const BottomContainerEnd = styled.aside`
  flex-basis: 300px;
`

interface Props {}

const TaskDetailPage: FC<Props> = () => {
  const { currentTab, updateTab } = useTabs<TabType>('offers')

  function renderTabStart() {
    switch (currentTab) {
      case 'taskDetails':
        return <TaskDetailsMain />
      case 'offers':
        return <OffersMain />
      case 'hires':
        return <HiresMain />
      case 'taskProgress':
        return <ProgressMain />
      default:
        return null
    }
  }

  function renderTabEnd() {
    switch (currentTab) {
      case 'taskDetails':
        return <TaskDetailsSummary />
      case 'offers':
        return <OffersSummary />
      case 'hires':
        return <HiresSummary />
      case 'taskProgress':
        return <ProgressSummary />
      default:
        return null
    }
  }

  return (
    <StyledContainer>
      <TopContainer>
        <TaskDetailHeader />
        <TaskDetailTabs currentTab={currentTab} updateTab={updateTab} />
      </TopContainer>
      <BottomContainer>
        <BottomContainerStart>{renderTabStart()}</BottomContainerStart>
        <BottomContainerEnd>{renderTabEnd()}</BottomContainerEnd>
      </BottomContainer>
    </StyledContainer>
  )
}

export default TaskDetailPage
