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
import Loader from '../../../uiComponents/atoms/Loader/Loader'

const ProfilePage: FC = () => {
  const { currentTab, updateTab } = useTabs<TabType>('basicInfo')
  const { data: User, loading } = useGetUserProfileDetailsQuery()

  function renderTab() {
    switch (currentTab) {
      case 'basicInfo':
        return <BasicInfo user={User.me} />
      case 'education':
        return <Education user={User.me} />
      case 'workExperience':
        return <WorkExperience user={User.me} />
      case 'portfolio':
        return <Portfolio user={User.me} />
      case 'badges':
        return <Badges />
      default:
        return null
    }
  }

  return (
    <DashboardPageContainer>
      {loading ? (
        <Loader name="Dashboard" padded />
      ) : (
        <>
          <ProfileHeader user={User.me} />
          <ProfileTabs currentTab={currentTab} updateTab={updateTab} />
          {renderTab()}
        </>
      )}
    </DashboardPageContainer>
  )
}

export default ProfilePage
