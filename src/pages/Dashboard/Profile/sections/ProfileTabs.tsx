import React, { FC } from 'react'
import styled from 'styled-components'
import { borderColor, black } from '../../../../styles/colors'
import { TabType } from '../types'
import Tab from '../../../../uiComponents/atoms/Tab'

const TabContainer = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${borderColor};
  display: flex;
  align-items: center;
`

interface Props {
  currentTab: TabType
  updateTab: (tab: TabType) => void
}

const ProfileTabs: FC<Props> = ({ currentTab, updateTab }) => {
  const tabs = [
    {
      title: 'Basic Info',
      active: currentTab === 'basicInfo',
    },
    {
      title: 'Education',
      active: currentTab === 'education',
    },
    {
      title: 'Work Experience',
      active: currentTab === 'workExperience',
    },
    {
      title: 'Portfolio',
      active: currentTab === 'portfolio',
    },
  ]
  return (
    <TabContainer>
      {tabs.map(tab => (
        <Tab title={tab.title} active={tab.active} spacingRight />
      ))}
    </TabContainer>
  )
}

export default ProfileTabs
