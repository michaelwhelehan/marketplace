import React, { FC } from 'react'
import styled from 'styled-components'
import { DashboardPanelContainer } from '../../Dashboard/Panels/DashboardPanel'
import Skills, { SkillSelector } from './Skills'

export const InfoPanelSelector = styled(DashboardPanelContainer)`
  ${SkillSelector}:not(:first-child) {
    margin-top: 20px;
  }
`

interface Props {}

const InfoPanel: FC<Props> = () => {
  return (
    <InfoPanelSelector padded>
      <Skills title="Transport" values={['Car', 'Bicycle']} />
      <Skills title="Languages" values={['English', 'Afrikaans']} />
      <Skills title="Skills" values={['Web Development', 'Design']} />
    </InfoPanelSelector>
  )
}

export default InfoPanel
