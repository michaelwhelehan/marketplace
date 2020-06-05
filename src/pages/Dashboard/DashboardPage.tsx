import React, { FC } from 'react'
import styled from 'styled-components'
import BaseContainer from '../../uiComponents/atoms/Container'
import Button from '../../uiComponents/atoms/Button'
import { borderColor, offWhite, white } from '../../styles/colors'
import { MAIN_HEADER_HEIGHT } from '../../constants/sizes'
import Navigation from './sections/Navigation'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import ProfilePage from './Profile/ProfilePage'
import TasksPage from './Tasks/TasksPage'
import PaymentHistoryPage from './PaymentHistory/PaymentHistoryPage'
import PaymentMethodsPage from './PaymentMethods/PaymentMethodsPage'
import RecentTasks from './sections/RecentTasks'
import AccountSummary from './sections/AccountSummary'
import CreditSummary from './sections/CreditSummary'
import ActivityFeed from './sections/ActivityFeed'

const DashboardContainer = styled.article`
  display: flex;
`

const DashboardStart = styled.main`
  flex: 2;
  margin-right: 20px;

  > div:not(:first-child) {
    margin-top: 20px;
  }
`

const DashboardEnd = styled.aside`
  flex: 1;

  > div:not(:first-child) {
    margin-top: 20px;
  }
`

const StyledContainer = styled(BaseContainer)`
  min-height: calc(100vh - ${MAIN_HEADER_HEIGHT}px);
  display: flex;
`

const SideListContainer = styled.article`
  flex-basis: 210px;
  padding: 20px;
  border-left: 1px solid ${borderColor};
  border-right: 1px solid ${borderColor};
  background-color: ${white};
`

const MainContainer = styled.article`
  flex: 1;
  padding-left: 20px;
  padding-top: 20px;
  background-color: ${offWhite};
`

const DashboardPage: FC = () => {
  const match = useRouteMatch()

  return (
    <>
      <StyledContainer>
        <SideListContainer>
          <Button fullWidth>Create Task</Button>
          <Navigation />
        </SideListContainer>
        <MainContainer>
          <Switch>
            <Route path={`${match.path}/profile`}>
              <ProfilePage />
            </Route>
            <Route path={`${match.path}/my-tasks`}>
              <TasksPage />
            </Route>
            <Route path={`${match.path}/payment-history`}>
              <PaymentHistoryPage />
            </Route>
            <Route path={`${match.path}/payment-methods`}>
              <PaymentMethodsPage />
            </Route>
            <Route path={match.path}>
              <DashboardContainer>
                <DashboardStart>
                  <RecentTasks />
                  <ActivityFeed />
                </DashboardStart>
                <DashboardEnd>
                  <AccountSummary />
                  <CreditSummary />
                </DashboardEnd>
              </DashboardContainer>
            </Route>
          </Switch>
        </MainContainer>
      </StyledContainer>
    </>
  )
}

export default DashboardPage
