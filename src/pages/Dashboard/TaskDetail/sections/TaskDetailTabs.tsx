import React, { FC } from 'react'
import DashboardTabPanel from '../../Panels/DashboardTabPanel'
import { Tabs } from '../../../../types/tab'
import { TabType } from '../types'
import Tab from '../../../../uiComponents/atoms/Tab'
import styled from 'styled-components'
import UpdateIndicator from '../../../../uiComponents/atoms/UpdateIndicator'

const TabWrapper = styled.div`
  position: relative;
`

interface Props {
  currentTab: TabType
  updateTab: (tab: TabType) => void
}

const TaskDetailTabs: FC<Props> = ({ currentTab, updateTab }) => {
  const tabs: Tabs<TabType>[] = [
    {
      title: 'Job Details',
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
      title: 'Job Progress',
      active: currentTab === 'taskProgress',
      type: 'taskProgress',
      hasUpdates: true,
    },
  ]
  return (
    <DashboardTabPanel>
      {tabs.map((tab, index) => (
        <TabWrapper key={index}>
          <Tab
            title={tab.title}
            active={tab.active}
            onClick={() => updateTab(tab.type)}
            underline
          />
          {tab.hasUpdates && <UpdateIndicator position="middleEnd" />}
        </TabWrapper>
      ))}
    </DashboardTabPanel>
  )
}

export default TaskDetailTabs
