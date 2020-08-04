import React, { FC } from 'react'
import DashboardPageContainer from '../DashboardPageContainer'
import ProfileHeader from './sections/ProfileHeader'
import ProfileTabs from './sections/ProfileTabs'
import useTabs from '../../../hooks/useTabs'
import { TabType } from './types'
import BasicInfo from './sections/BasicInfo'
import Education from './sections/Education'
import WorkExperience from './sections/WorkExperience'
import Portfolio from './sections/Portfolio'
import Badges from './sections/Badges'
import { useGetUserProfileDetailsQuery } from './queries'

const ProfilePage: FC = () => {
  const { currentTab, updateTab } = useTabs<TabType>('basicInfo')
  const { data: User, loading, error } = useGetUserProfileDetailsQuery()
  console.log(User)

  function renderTab() {
    switch (currentTab) {
      case 'basicInfo':
        return <BasicInfo />
      case 'education':
        return <Education />
      case 'workExperience':
        return <WorkExperience />
      case 'portfolio':
        return <Portfolio />
      case 'badges':
        return <Badges />
      default:
        return null
    }
  }

  return (
    <DashboardPageContainer>
      <ProfileHeader />
      <ProfileTabs currentTab={currentTab} updateTab={updateTab} />
      {renderTab()}
    </DashboardPageContainer>
  )
}

export default ProfilePage
