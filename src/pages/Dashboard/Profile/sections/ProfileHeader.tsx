import React, { FC } from 'react'
import styled from 'styled-components'
import { HeadingM } from '../../../../uiComponents/atoms/Headings'
import Button from '../../../../uiComponents/atoms/Button'
import { borderColor, black } from '../../../../styles/colors'
import { Link } from 'react-router-dom'
import ProgressBar from '../../../../uiComponents/atoms/ProgressBar'
import { UserProfileDetails_me } from '../gqlTypes/UserProfileDetails'

const HeaderContainer = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${borderColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledHeading = styled(HeadingM)`
  color: ${black};
`

const StyledLink = styled(Link)`
  text-decoration: none;
  line-height: 16px;
`

const EndContainer = styled.div`
  display: flex;
`

interface Props {
  user: UserProfileDetails_me
}

const ProfileHeader: FC<Props> = ({ user }) => {
  const percentComplete = 40
  return (
    <HeaderContainer>
      <StyledHeading>Edit Profile</StyledHeading>
      <EndContainer>
        <ProgressBar
          percentComplete={percentComplete}
          description={`Your profile is ${percentComplete}% complete`}
        />
        <Button
          styleType="primary-outline"
          as={StyledLink}
          to={`/profile/${user.username}`}
          style={{ marginLeft: '20px' }}
        >
          View Public Profile
        </Button>
      </EndContainer>
    </HeaderContainer>
  )
}

export default ProfileHeader
