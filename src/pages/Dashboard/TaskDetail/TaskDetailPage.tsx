import React, { FC, useCallback } from 'react'
import styled from 'styled-components'
import BaseContainer from '../../../uiComponents/atoms/Container'
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
import { DashboardPanelContainer } from '../Panels/DashboardPanel'
import { toXL } from '../../../constants/breakpoints'
import { useGetTaskQuery } from '../../MarketplaceTDP/queries'
import { useParams } from 'react-router-dom'
import Loader from '../../../uiComponents/atoms/Loader/Loader'
import { useAuth } from '../../../services'
import QuestionsMain from './sections/Questions/QuestionsMain'

const Container = styled(BaseContainer)`
  @media (${toXL}) {
    padding: 0 20px;
  }
`

const TopContainer = styled(DashboardPanelContainer)`
  margin-top: 20px;
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

interface Params {
  taskSlug: string
  tab: TabType
}

interface Props {}

const TaskDetailPage: FC<Props> = () => {
  const { taskSlug, tab } = useParams<Params>()
  const { currentTab, updateTab } = useTabs<TabType>(tab)
  const { user } = useAuth()
  const { data, loading } = useGetTaskQuery({
    slug: taskSlug,
  })

  const renderTabStart = useCallback(() => {
    switch (currentTab) {
      case 'details':
        return <TaskDetailsMain task={data.task} user={user} />
      case 'questions':
        return <QuestionsMain task={data.task} />
      case 'offers':
        return <OffersMain taskSlug={taskSlug} />
      case 'hires':
        return <HiresMain />
      case 'progress':
        return <ProgressMain />
      default:
        return null
    }
  }, [currentTab, data?.task, user, taskSlug])

  const renderTabEnd = useCallback(() => {
    switch (currentTab) {
      case 'details':
        return <TaskDetailsSummary />
      case 'questions':
        return <TaskDetailsSummary />
      case 'offers':
        return <OffersSummary />
      case 'hires':
        return <HiresSummary />
      case 'progress':
        return <ProgressSummary />
      default:
        return null
    }
  }, [currentTab])

  return (
    <Container>
      {loading ? (
        <Loader name="Dashboard" />
      ) : (
        <>
          <TopContainer>
            <TaskDetailHeader task={data.task} />
            <TaskDetailTabs
              task={data.task}
              user={user}
              currentTab={currentTab}
              updateTab={updateTab}
            />
          </TopContainer>
          <BottomContainer>
            <BottomContainerStart>{renderTabStart()}</BottomContainerStart>
            <BottomContainerEnd>{renderTabEnd()}</BottomContainerEnd>
          </BottomContainer>
        </>
      )}
    </Container>
  )
}

export default TaskDetailPage
