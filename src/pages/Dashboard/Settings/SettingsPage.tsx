import React, { FC } from 'react'
import DashboardPageContainer from '../DashboardPageContainer'
import SettingsHeader from './sections/SettingsHeader'
import SettingsTabs from './sections/SettingsTabs'
import useTabs from '../../../hooks/useTabs'
import { TabType } from './types'
import Account from './sections/Account'
import Password from './sections/Password'
import TaskAlerts from './sections/TaskAlerts'
import NotificationSettings from './sections/NotificationSettings'

const SettingsPage: FC = () => {
  const { currentTab, updateTab } = useTabs<TabType>({
    initialTab: 'taskAlerts',
  })

  function renderTab() {
    switch (currentTab) {
      case 'account':
        return <Account />
      case 'taskAlerts':
        return <TaskAlerts />
      case 'notificationSettings':
        return <NotificationSettings />
      case 'password':
        return <Password />
      default:
        return null
    }
  }

  return (
    <DashboardPageContainer>
      <SettingsHeader />
      <SettingsTabs currentTab={currentTab} updateTab={updateTab} />
      {renderTab()}
    </DashboardPageContainer>
  )
}

export default SettingsPage
