import React, { FC } from 'react'
import { TabType } from '../types'
import Tab from '../../../../uiComponents/atoms/Tab'
import { Tabs } from '../../../../types/tab'
import DashboardFilterPanel from '../../../../components/Panels/DashboardFilterPanel'

interface Props {
  currentTab: TabType
  updateTab: (tab: TabType) => void
}

const TopFilterPanel: FC<Props> = ({ currentTab, updateTab }) => {
  const tabs: Tabs<TabType>[] = [
    {
      title: 'EARNED',
      active: currentTab === 'earned',
      type: 'earned',
    },
    {
      title: 'OUTGOING',
      active: currentTab === 'outgoing',
      type: 'outgoing',
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

export default TopFilterPanel
