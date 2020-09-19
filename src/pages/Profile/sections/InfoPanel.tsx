import React, { FC } from 'react'
import styled from 'styled-components'
import { DashboardPanelContainer } from '../../Dashboard/Panels/DashboardPanel'
import Skills, { SkillSelector } from './Skills'
import { PublicUserProfile_publicUser } from '../gqlTypes/PublicUserProfile'

export const InfoPanelSelector = styled(DashboardPanelContainer)`
  ${SkillSelector}:not(:first-child) {
    margin-top: 20px;
  }
`

interface Props {
  user: PublicUserProfile_publicUser
}

const InfoPanel: FC<Props> = ({ user }) => {
  return (
    <InfoPanelSelector padded>
      {/* <Skills title="Transport" values={['Car', 'Bicycle']} /> */}
      <Skills title="Languages" values={['English', 'Afrikaans']} />
      <Skills title="Skills" values={user.skills.map((skill) => skill.name)} />
    </InfoPanelSelector>
  )
}

export default InfoPanel
