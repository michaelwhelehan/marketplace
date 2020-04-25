import React, { FC } from 'react'
import styled from 'styled-components'
import FilterHeader from '../../uiComponents/molecules/FilterHeader'
import BaseContainer from '../../uiComponents/atoms/Container'
import Map from './sections/Map'
import SideList from './sections/SideList'
import { useRouteMatch, Switch, Route, useLocation } from 'react-router-dom'
import ArticleDetailPage from '../MarketplaceADP/ArticleDetailPage'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { MAIN_HEADER_HEIGHT, FILTER_HEADER_HEIGHT } from '../../constants/sizes'
import { useQuery, gql } from '@apollo/client'

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
  query Tasks($cursor: String) {
    taskFeed(cursor: $cursor) @client {
      cursor
      tasks {
        id
        creator {
          profilePictureUrl
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
  const { data, loading, fetchMore } = useQuery(GET_TASKS, {
    variables: { cursor: undefined },
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
              console.log('LOADING MORE')
              await sleep(Math.floor(Math.random() * 1000) + 500)
              await fetchMore({
                query: GET_TASKS,
                variables: {
                  cursor: data.taskFeed.cursor,
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
              key={location.pathname === '/' ? location.key : '1'}
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
