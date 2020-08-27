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
import { GET_CREATE_TASK_VISIBLE } from '../../components/Layout/Layout'
import { useQuery } from '@apollo/client'
import SettingsPage from './Settings/SettingsPage'
import { toXL } from '../../constants/breakpoints'

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
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  background-color: ${offWhite};

  @media (${toXL}) {
    padding-right: 20px;
  }
`

const DashboardPage: FC = () => {
  const match = useRouteMatch()
  const { client } = useQuery(GET_CREATE_TASK_VISIBLE)

  return (
    <>
      <StyledContainer>
        <SideListContainer>
          <Button
            fullWidth
            onClick={() =>
              client.writeQuery({
                query: GET_CREATE_TASK_VISIBLE,
                data: { createTaskVisible: true },
              })
            }
          >
            Create Task
          </Button>
          <Navigation />
        </SideListContainer>
        <MainContainer>
          <Switch>
            <Route path={`${match.path}/profile`}>
              <ProfilePage />
            </Route>
            <Route path={`${match.path}/settings`}>
              <SettingsPage />
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
