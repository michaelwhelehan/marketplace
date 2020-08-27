import React, { FC } from 'react'
import styled from 'styled-components'
import FilterHeader from '../../components/FilterHeader/FilterHeader'
import BaseContainer from '../../uiComponents/atoms/Container'
import Map from './sections/Map'
import SideList from './sections/SideList'
import { useRouteMatch, Switch, Route, useLocation } from 'react-router-dom'
import TaskDetailPage from '../MarketplaceTDP/TaskDetailPage'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { MAIN_HEADER_HEIGHT, FILTER_HEADER_HEIGHT } from '../../constants/sizes'
import { useGetTasksQuery } from './queries'
import { fromXL } from '../../constants/breakpoints'

const StyledContainer = styled(BaseContainer)`
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  height: calc(100vh - ${MAIN_HEADER_HEIGHT}px - ${FILTER_HEADER_HEIGHT}px);
  display: flex;
`

const SideListContainer = styled.article`
  flex: 3;

  @media (${fromXL}) {
    flex: 2;
  }
`

const MainContainer = styled.article`
  flex: 9;

  > div {
    overflow: hidden;
    position: relative;
  }
`

const MarketplacePage: FC = () => {
  const match = useRouteMatch()
  const location = useLocation()
  const { data, loading, loadMore } = useGetTasksQuery({
    pageSize: 20,
  })
  const hasData = data?.tasks?.edges?.length > 0

  return (
    <>
      <FilterHeader />
      <StyledContainer>
        <SideListContainer>
          <SideList
            tasksLoading={loading && !hasData}
            tasks={data?.tasks?.edges}
            tasksLoadAmount={20}
            onLoadMoreTasks={async () => {
              if (data?.tasks?.pageInfo?.hasNextPage) {
                loadMore(
                  (prev, next) => ({
                    ...prev,
                    tasks: {
                      ...prev.tasks,
                      edges: [...prev.tasks.edges, ...next.tasks.edges],
                      pageInfo: next.tasks.pageInfo,
                    },
                  }),
                  {
                    after: data?.tasks?.pageInfo?.endCursor,
                  },
                )
              }
            }}
          />
        </SideListContainer>
        <MainContainer>
          <TransitionGroup>
            <CSSTransition
              key={location.pathname === '/' ? location.key : ''}
              classNames="slide"
              timeout={1000}
            >
              <Switch location={location}>
                <Route path={`${match.path}:taskSlug`}>
                  <TaskDetailPage />
                </Route>
                <Route path={match.path}>
                  <Map />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </MainContainer>
      </StyledContainer>
    </>
  )
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default MarketplacePage
