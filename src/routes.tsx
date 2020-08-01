import React, { FC } from 'react'
import Layout from './components/Layout/Layout'
import Marketplace from './pages/Marketplace/MarketplacePage'
import Dashboard from './pages/Dashboard/DashboardPage'
import Inbox from './pages/Inbox/InboxPage'
import ProfilePage from './pages/Profile/ProfilePage'
import { Switch, Route } from 'react-router-dom'
import TaskDetailPage from './pages/Dashboard/TaskDetail/TaskDetailPage'
import LoginPage from './pages/Auth/LoginPage'

const Routes: FC = () => {
  return (
    <Route>
      <Layout>
        <Switch>
          <Route path="/dashboard/inbox">
            <Inbox />
          </Route>
          <Route path="/tasks/:taskSlug">
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
          <Route path="/">
            <Marketplace />
          </Route>
        </Switch>
      </Layout>
    </Route>
  )
}

export default Routes
