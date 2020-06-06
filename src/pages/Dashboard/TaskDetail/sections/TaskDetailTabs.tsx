import React, { FC } from 'react'
import DashboardTabPanel from '../../Panels/DashboardTabPanel'
import { Tabs } from '../../../../types/tab'
import { TabType } from '../types'
import Tab from '../../../../uiComponents/atoms/Tab'

interface Props {
  currentTab: TabType
  updateTab: (tab: TabType) => void
}

const TaskDetailTabs: FC<Props> = ({ currentTab, updateTab }) => {
  const tabs: Tabs<TabType>[] = [
    {
      title: 'Task Details',
      active: currentTab === 'taskDetails',
      type: 'taskDetails',
    },
    {
      title: 'Offers (4)',
      active: currentTab === 'offers',
      type: 'offers',
    },
    {
      title: 'Hires (1)',
      active: currentTab === 'hires',
      type: 'hires',
    },
    {
      title: 'Task Progress',
      active: currentTab === 'taskProgress',
      type: 'taskProgress',
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

export default TaskDetailTabs
