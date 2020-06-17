import React, { FC } from 'react'
import Tab from '../../../../uiComponents/atoms/Tab'
import DashboardTabPanel from '../../Panels/DashboardTabPanel'
import { Tabs } from '../../../../types/tab'
import { TabType } from '../types'

interface Props {
  currentTab: TabType
  updateTab: (tab: TabType) => void
}

const SettingsTabs: FC<Props> = ({ currentTab, updateTab }) => {
  const tabs: Tabs<TabType>[] = [
    {
      title: 'Account',
      active: currentTab === 'account',
      type: 'account',
    },
    {
      title: 'Task Alerts',
      active: currentTab === 'taskAlerts',
      type: 'taskAlerts',
    },
    {
      title: 'Notification Settings',
      active: currentTab === 'notificationSettings',
      type: 'notificationSettings',
    },
    {
      title: 'Password',
      active: currentTab === 'password',
      type: 'password',
    },
  ]
  return (
    <DashboardTabPanel>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          title={tab.title}
          active={tab.active}
          onClick={() => updateTab(tab.type)}
          underline
        />
      ))}
    </DashboardTabPanel>
  )
}

export default SettingsTabs
