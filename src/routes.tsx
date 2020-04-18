import React, { FC } from 'react'
import Layout from './uiComponents/organisms/Layout'
import Marketplace from './pages/Marketplace'
import Dashboard from './pages/Dashboard'
import Inbox from './pages/Inbox'
import { Switch, Route } from 'react-router-dom'

const Routes: FC = () => {
  return (
    <Route>
      <Layout>
        <Switch>
          <Route path="/dashboard/inbox">
            <Inbox />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
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
