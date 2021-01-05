import React, { FC } from 'react'
import DashboardTabPanel from '../../Panels/DashboardTabPanel'
import { Tabs } from '../../../../types/tab'
import { TabType } from '../types'
import Tab from '../../../../uiComponents/atoms/Tab'
import styled from 'styled-components'
import UpdateIndicator from '../../../../uiComponents/atoms/UpdateIndicator'
import { Task_task } from '../../../MarketplaceTDP/gqlTypes/Task'
import { User } from '../../../../services/fragments/gqlTypes/User'

const TabWrapper = styled.div`
  position: relative;
`

interface Props {
  currentTab: TabType
  updateTab: (tab: TabType) => void
  task: Task_task
  user: User
}

const TaskDetailTabs: FC<Props> = ({ currentTab, updateTab, task, user }) => {
  const tabs: Tabs<TabType>[] = [
    {
      title: 'Job Details',
      active: currentTab === 'taskDetails',
      type: 'taskDetails',
    } as Tabs<TabType>,
    {
      title: 'Questions',
      active: currentTab === 'questions',
      type: 'questions',
    } as Tabs<TabType>,
    {
      title: `Offers (${task.numOffers})`,
      active: currentTab === 'offers',
      type: 'offers',
    } as Tabs<TabType>,
    user.id === task.owner.id &&
      ({
        title: 'Hires (0)',
        active: currentTab === 'hires',
        type: 'hires',
      } as Tabs<TabType>),
    user.id === task.owner.id &&
      (task.status === 'ASSIGNED' || task.status === 'DELIVERED') &&
      ({
        title: 'Job Progress',
        active: currentTab === 'taskProgress',
        type: 'taskProgress',
        hasUpdates: true,
      } as Tabs<TabType>),
  ].filter(Boolean)
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
