import React, { FC, useMemo } from 'react'
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
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
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

interface MatchParams {
  taskSlug: string
  tab: TabType
}

interface Props {}

const TaskDetailPage: FC<Props> = () => {
  const match = useRouteMatch<MatchParams>('/jobs/:taskSlug/:tab')
  const parentMatch = useRouteMatch()
  const { currentTab, updateTab } = useTabs<TabType>({
    initialTab: match.params.tab,
    navigateUrl: true,
  })
  const { user } = useAuth()
  const { data, loading } = useGetTaskQuery({
    slug: match.params.taskSlug,
  })

  const routes = useMemo(
    () => [
      {
        path: '/details',
        main: () => <TaskDetailsMain task={data.task} user={user} />,
        sidebar: () => <TaskDetailsSummary />,
      },
      {
        path: '/questions',
        main: () => <QuestionsMain task={data.task} />,
        sidebar: () => <TaskDetailsSummary />,
      },
      {
        path: '/offers',
        main: () => <OffersMain taskSlug={match.params.taskSlug} />,
        sidebar: () => <OffersSummary />,
      },
      {
        path: '/hires',
        main: () => <HiresMain />,
        sidebar: () => <HiresSummary />,
      },
      {
        path: '/progress',
        main: () => <ProgressMain />,
        sidebar: () => <ProgressSummary />,
      },
    ],
    [data?.task, user, match.params.taskSlug],
  )

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
            <BottomContainerStart>
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={`${parentMatch.path}${route.path}`}
                    children={<route.main />}
                  />
                ))}
              </Switch>
            </BottomContainerStart>
            <BottomContainerEnd>
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={`${parentMatch.path}${route.path}`}
                    children={<route.sidebar />}
                  />
                ))}
              </Switch>
            </BottomContainerEnd>
          </BottomContainer>
        </>
      )}
    </Container>
  )
}

export default TaskDetailPage
