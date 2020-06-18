import React, { FC } from 'react'
import styled from 'styled-components'
import { ParagraphS } from '../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../styles/typography'
import { black } from '../../../styles/colors'

export const SkillSelector = styled.div``

export const SkillHeading = styled(ParagraphS)`
  color: ${black};
  ${fwBold};
  margin-bottom: 10px;
`

const SkillValues = styled(ParagraphS)`
  ${fwBold};
`

interface Props {
  title: string
  values: string[]
}

const Skills: FC<Props> = ({ title, values }) => {
  return (
    <SkillSelector>
      <SkillHeading>{title}</SkillHeading>
      <SkillValues>{values.join(', ')}</SkillValues>
    </SkillSelector>
  )
}

export default Skills
