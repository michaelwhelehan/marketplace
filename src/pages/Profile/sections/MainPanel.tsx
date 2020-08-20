import React, { FC } from 'react'
import styled from 'styled-components'
import { DashboardPanelContainer } from '../../Dashboard/Panels/DashboardPanel'
import { SkillHeading } from './Skills'
import { ParagraphS } from '../../../uiComponents/atoms/Paragraphs'
import { PublicUserProfile_publicUser } from '../gqlTypes/PublicUserProfile'
import Educations from './Educations'
import Portfolios from './Portfolios'
import WorkExperiences from './WorkExperiences'

const Container = styled(DashboardPanelContainer)`
  ${SkillHeading}:not(:first-child) {
    margin-top: 20px;
  }
`

interface Props {
  user: PublicUserProfile_publicUser
}

const MainPanel: FC<Props> = ({ user }) => {
  return (
    <Container padded>
      <SkillHeading>About</SkillHeading>
      <ParagraphS>{user.bio}</ParagraphS>
      {user.workExperiences?.length > 0 && (
        <>
          <SkillHeading>Work Experience</SkillHeading>
          <WorkExperiences workExperiences={user.workExperiences} />
        </>
      )}
      {user.educations?.length > 0 && (
        <>
          <SkillHeading>Education</SkillHeading>
          <Educations educations={user.educations} />
        </>
      )}
      {user.portfolios?.length > 0 && (
        <>
          <SkillHeading>Case Studies</SkillHeading>
          <Portfolios portfolios={user.portfolios} />
        </>
      )}
    </Container>
  )
}

export default MainPanel
