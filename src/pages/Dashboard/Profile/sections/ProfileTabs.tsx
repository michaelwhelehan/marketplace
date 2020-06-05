import React, { FC } from 'react'
import Tab from '../../../../uiComponents/atoms/Tab'
import DashboardTabPanel from '../../../../components/Panels/DashboardTabPanel'
import { Tabs } from '../../../../types/tab'
import { TabType } from '../types'

interface Props {
  currentTab: TabType
  updateTab: (tab: TabType) => void
}

const ProfileTabs: FC<Props> = ({ currentTab, updateTab }) => {
  const tabs: Tabs<TabType>[] = [
    {
      title: 'Basic Info',
      active: currentTab === 'basicInfo',
      type: 'basicInfo',
    },
    {
      title: 'Education',
      active: currentTab === 'education',
      type: 'education',
    },
    {
      title: 'Work Experience',
      active: currentTab === 'workExperience',
      type: 'workExperience',
    },
    {
      title: 'Portfolio',
      active: currentTab === 'portfolio',
      type: 'portfolio',
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

export default ProfileTabs
