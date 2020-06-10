import React, { FC } from 'react'
import styled from 'styled-components'
import { ParagraphS } from '../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../styles/typography'
import { black } from '../../../styles/colors'

export const SkillSelector = styled.div``

const SkillHeading = styled(ParagraphS)`
  color: ${black};
  ${fwBold};
`

const SkillValues = styled(ParagraphS)`
  margin-top: 10px;
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
