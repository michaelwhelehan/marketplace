import React, { FC } from 'react'
import styled from 'styled-components'
import { DashboardPanelContainer } from '../../Dashboard/Panels/DashboardPanel'
import { SkillHeading } from './Skills'
import ReviewSummary from '../../../uiComponents/molecules/ReviewSummary'
import useTabs from '../../../hooks/useTabs'
import Tab from '../../../uiComponents/atoms/Tab'
import { Tabs } from '../../../types/tab'
import DashboardTabPanel from '../../Dashboard/Panels/DashboardTabPanel'

const Container = styled(DashboardPanelContainer)`
  ${SkillHeading}:not(:first-child) {
    margin-top: 20px;
  }
`

type TabType = 'freelancer' | 'employer'

interface Props {}

const ReviewPanel: FC<Props> = () => {
  const { currentTab, updateTab } = useTabs<TabType>('freelancer')
  const tabs: Tabs<TabType>[] = [
    {
      title: 'As Freelancer',
      active: currentTab === 'freelancer',
      type: 'freelancer',
    },
    {
      title: 'As Employer',
      active: currentTab === 'employer',
      type: 'employer',
    },
  ]

  return (
    <Container padded>
      <SkillHeading>Reviews</SkillHeading>
      <ReviewSummary rating={5} numRatings={10} />
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
    </Container>
  )
}

export default ReviewPanel
