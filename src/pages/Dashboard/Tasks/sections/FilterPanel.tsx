import React, { FC } from 'react'
import { TabType } from '../types'
import Tab from '../../../../uiComponents/atoms/Tab'
import { Tabs } from '../../../../types/tab'
import DashboardFilterPanel from '../../Panels/DashboardFilterPanel'
import styled from 'styled-components'
import RoleToggle from '../../../../uiComponents/atoms/RoleToggle'

const StyledDashboardFilterPanel = styled(DashboardFilterPanel)`
  justify-content: space-between;
`

const TabContainer = styled.div`
  display: flex;
  align-items: center;
`

const RoleContainer = styled.div`
  padding-right: 20px;
`

interface Props {
  currentTab: TabType
  updateTab: (tab: TabType) => void
}

const FilterPanel: FC<Props> = ({ currentTab, updateTab }) => {
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
    <StyledDashboardFilterPanel>
      <TabContainer>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            title={tab.title}
            active={tab.active}
            onClick={() => updateTab(tab.type)}
          />
        ))}
      </TabContainer>
      <RoleContainer>
        <RoleToggle />
      </RoleContainer>
    </StyledDashboardFilterPanel>
  )
}

export default FilterPanel
