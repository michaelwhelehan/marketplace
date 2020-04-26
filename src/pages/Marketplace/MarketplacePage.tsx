import React, { FC } from 'react'
import styled from 'styled-components'
import FilterHeader from '../../components/FilterHeader/FilterHeader'
import BaseContainer from '../../uiComponents/atoms/Container'
import Map from './sections/Map'
import SideList from './sections/SideList'
import { useRouteMatch, Switch, Route, useLocation } from 'react-router-dom'
import ArticleDetailPage from '../MarketplaceADP/ArticleDetailPage'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { MAIN_HEADER_HEIGHT, FILTER_HEADER_HEIGHT } from '../../constants/sizes'
import { useQuery, gql } from '@apollo/client'
import { TaskType } from '../../types/task'

interface TaskData {
  taskFeed: {
    cursor: string
    tasks: TaskType[]
  }
}

interface TaskVars {
  cursor: string
  loadAmount: number
}

const StyledContainer = styled(BaseContainer)`
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  height: calc(100vh - ${MAIN_HEADER_HEIGHT}px - ${FILTER_HEADER_HEIGHT}px);
  display: flex;
`

const SideListContainer = styled.article`
  flex: 3;
`

const MainContainer = styled.article`
  flex: 9;

  > div {
    overflow: hidden;
    position: relative;
  }
`

const GET_TASKS = gql`
  query Tasks($cursor: String, $loadAmount: Integer) {
    taskFeed(cursor: $cursor, loadAmount: $loadAmount) @client {
      cursor
      tasks {
        id
        creator {
          profilePictureUrl
          name
        }
        title
        slug
        budget
        currency {
          code
          iso
        }
        location
        dueDate
        details
        numOffers
      }
    }
  }
`

const MarketplacePage: FC = () => {
  const match = useRouteMatch()
  const location = useLocation()
  const { data, loading, fetchMore } = useQuery<TaskData, TaskVars>(GET_TASKS, {
    variables: { cursor: undefined, loadAmount: undefined },
  })

  return (
    <>
      <FilterHeader />
      <StyledContainer>
        <SideListContainer>
          <SideList
            tasksLoading={loading}
            tasks={data?.taskFeed?.tasks}
            tasksLoadAmount={10}
            onLoadMoreTasks={async loadAmount => {
              await sleep(Math.floor(Math.random() * 1000) + 500)
              await fetchMore({
                query: GET_TASKS,
                variables: {
                  cursor: data.taskFeed.cursor,
                  loadAmount,
                },
                updateQuery: (
                  previousResult: {
                    taskFeed: { tasks: any; cursor: string }
                  },
                  { fetchMoreResult },
                ) => {
                  const previousTaskFeed = previousResult.taskFeed
                  const newTaskFeed = fetchMoreResult.taskFeed

                  const newTaskFeedData = {
                    ...previousResult.taskFeed,
                    tasks: [...previousTaskFeed.tasks, ...newTaskFeed.tasks],
                    cursor: newTaskFeed.cursor,
                    __typename: 'TaskFeed',
                  }
                  const newData = {
                    ...previousResult,
                    taskFeed: newTaskFeedData,
                  }
                  return newData
                },
              })
            }}
          />
        </SideListContainer>
        <MainContainer>
          <TransitionGroup>
            <CSSTransition
              key={location.pathname === '/' ? location.key : undefined}
              classNames="slide"
              timeout={1000}
            >
              <Switch location={location}>
                <Route path={`${match.path}:taskSlug`}>
                  <ArticleDetailPage />
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
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default MarketplacePage
