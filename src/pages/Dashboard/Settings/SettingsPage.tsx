import React, { FC } from 'react'
import DashboardPageContainer from '../DashboardPageContainer'
import SettingsHeader from './sections/SettingsHeader'
import SettingsTabs from './sections/SettingsTabs'
import useTabs from '../../../hooks/useTabs'
import { TabType } from './types'
import BasicInfo from './sections/BasicInfo'

const SettingsPage: FC = () => {
  const { currentTab, updateTab } = useTabs<TabType>('account')

  function renderTab() {
    switch (currentTab) {
      case 'account':
        return <BasicInfo />
      case 'taskAlerts':
        return null
      case 'notificationSettings':
        return null
      case 'password':
        return null
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
