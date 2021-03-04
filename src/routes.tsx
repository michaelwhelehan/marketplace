import React, { FC, Suspense, lazy } from 'react'
import Layout from './components/Layout/Layout'
import { Switch, Route } from 'react-router-dom'
import Loader from './uiComponents/atoms/Loader/Loader'

import LoginPage from './pages/Auth/LoginPage'
import SignUpPage from './pages/Auth/SignUpPage'
import RequestPasswordResetPage from './pages/Auth/RequestPasswordResetPage'
import PasswordResetPage from './pages/Auth/PasswordResetPage'

const Marketplace = lazy(
  () =>
    import(
      /* webpackChunkName: "marketplace-page" */ './pages/Marketplace/MarketplacePage'
    ),
)

const ProfilePage = lazy(
  () =>
    import(
      /* webpackChunkName: "profile-page" */ './pages/Profile/ProfilePage'
    ),
)

const TaskDetailPage = lazy(
  () =>
    import(
      /* webpackChunkName: "task-detail-page" */ './pages/Dashboard/TaskDetail/TaskDetailPage'
    ),
)

const Inbox = lazy(
  () => import(/* webpackChunkName: "inbox-page" */ './pages/Inbox/InboxPage'),
)

const Dashboard = lazy(
  () =>
    import(
      /* webpackChunkName: "dashboard-page" */ './pages/Dashboard/DashboardPage'
    ),
)

const Routes: FC = () => {
  return (
    <Route>
      <Layout>
        <Suspense fallback={<Loader name="Dashboard" />}>
          <Switch>
            <Route path="/dashboard/inbox">
              <Inbox />
            </Route>
            <Route path="/jobs/:taskSlug">
              <TaskDetailPage />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/profile/:username">
              <ProfilePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/sign-up">
              <SignUpPage />
            </Route>
            <Route path="/forgot-password">
              <RequestPasswordResetPage />
            </Route>
            <Route path="/reset-password">
              <PasswordResetPage />
            </Route>
            <Route path="/">
              <Marketplace />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </Route>
  )
}

export default Routes
