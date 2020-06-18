import React, { FC } from 'react'
import styled from 'styled-components'
import { DashboardPanelContainer } from '../../Dashboard/Panels/DashboardPanel'
import { SkillHeading } from './Skills'
import faker from 'faker'
import { ParagraphS } from '../../../uiComponents/atoms/Paragraphs'

const Container = styled(DashboardPanelContainer)`
  ${SkillHeading}:not(:first-child) {
    margin-top: 20px;
  }
`

interface Props {}

const MainPanel: FC<Props> = () => {
  return (
    <Container padded>
      <SkillHeading>About</SkillHeading>
      <ParagraphS>{faker.lorem.paragraph(10)}</ParagraphS>
      <SkillHeading>Work Experience</SkillHeading>
      <ParagraphS>{faker.lorem.paragraph(10)}</ParagraphS>
      <SkillHeading>Education</SkillHeading>
      <ParagraphS>{faker.lorem.paragraph(10)}</ParagraphS>
      <SkillHeading>Portfolio</SkillHeading>
      <ParagraphS>{faker.lorem.paragraph(10)}</ParagraphS>
    </Container>
  )
}

export default MainPanel
