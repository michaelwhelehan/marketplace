import React, { FC } from 'react'
import { TabType } from '../types'
import Tab from '../../../../uiComponents/atoms/Tab'
import { Tabs } from '../../../../types/tab'
import DashboardFilterPanel from '../../../../components/Panels/DashboardFilterPanel'

interface Props {
  currentTab: TabType
  updateTab: (tab: TabType) => void
}

const TasksFilterPanel: FC<Props> = ({ currentTab, updateTab }) => {
  const tabs: Tabs<TabType>[] = [
    {
      title: 'ACTIVE',
      active: currentTab === 'active',
      type: 'active',
    },
    {
      title: 'MISSING DETAILS',
      active: currentTab === 'missingDetails',
      type: 'missingDetails',
    },
    {
      title: 'DELIVERED',
      active: currentTab === 'delivered',
      type: 'delivered',
    },
    {
      title: 'COMPLETED',
      active: currentTab === 'completed',
      type: 'completed',
    },
    {
      title: 'CANCELLED',
      active: currentTab === 'cancelled',
      type: 'cancelled',
    },
    {
      title: 'ALL',
      active: currentTab === 'all',
      type: 'all',
    },
  ]
  return (
    <DashboardFilterPanel>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          title={tab.title}
          active={tab.active}
          onClick={() => updateTab(tab.type)}
        />
      ))}
    </DashboardFilterPanel>
  )
}

export default TasksFilterPanel
