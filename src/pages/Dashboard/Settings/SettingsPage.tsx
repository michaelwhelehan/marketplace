import React, { FC } from 'react'
import DashboardPageContainer from '../DashboardPageContainer'
import SettingsHeader from './sections/SettingsHeader'
import SettingsTabs from './sections/SettingsTabs'
import useTabs from '../../../hooks/useTabs'
import { TabType } from './types'
import Account from './sections/Account'
import Password from './sections/Password'
import TaskAlerts from './sections/TaskAlerts'

const SettingsPage: FC = () => {
  const { currentTab, updateTab } = useTabs<TabType>('taskAlerts')

  function renderTab() {
    switch (currentTab) {
      case 'account':
        return <Account />
      case 'taskAlerts':
        return <TaskAlerts />
      case 'notificationSettings':
        return null
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
