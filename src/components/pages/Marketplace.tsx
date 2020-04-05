import React, { FC } from 'react'
import styled from 'styled-components'
import FilterHeader from '../molecules/FilterHeader'
import BaseContainer from '../atoms/Container'
import Map from '../organisms/Map'
import SideList from '../organisms/SideList'
import { useRouteMatch, Switch, Route, useLocation } from 'react-router-dom'
import ArticleDetailPage from './MarketplaceADP'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { MAIN_HEADER_HEIGHT, FILTER_HEADER_HEIGHT } from '../../constants/sizes'

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