import React, { FC } from 'react'
import styled from 'styled-components'
import FilterHeader from '../molecules/FilterHeader'
import BaseContainer from '../atoms/Container'
import Map from './Map'
import SideList from '../molecules/SideList'
import { useRouteMatch, Switch, Route, useLocation } from 'react-router-dom'
import ArticleDetailPage from './ArticleDetailPage'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const StyledContainer = styled(BaseContainer)`
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  height: calc(100vh - 64px - 56px - 2px);
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

const Marketplace: FC = () => {
  const match = useRouteMatch()
  const location = useLocation()
  return (
    <>
      <FilterHeader />
      <StyledContainer>
        <SideListContainer>
          <SideList />
        </SideListContainer>
        <MainContainer>
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="slide" timeout={1000}>
              <Switch location={location}>
                <Route path={`${match.path}:topicId`}>
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

export default Marketplace
