import React, { FC } from 'react'
import Layout from './components/organisms/Layout'
import Marketplace from './components/organisms/Marketplace'
import Dashboard from './components/organisms/Dashboard'
import Inbox from './components/organisms/Inbox'
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
