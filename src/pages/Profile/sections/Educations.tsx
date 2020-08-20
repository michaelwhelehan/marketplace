import React, { FC } from 'react'
import styled from 'styled-components'
import { ParagraphS, ParagraphXS } from '../../../uiComponents/atoms/Paragraphs'
import { fwMediumBold } from '../../../styles/typography'
import { black } from '../../../styles/colors'
import { PublicUserProfile_publicUser_educations } from '../gqlTypes/PublicUserProfile'

export const EducationSelector = styled.div``

const EducationHeading = styled(ParagraphS)`
  color: ${black};
  ${fwMediumBold};
  margin-bottom: 5px;
`

const EducationParagraph = styled(ParagraphXS)`
  margin-bottom: 5px;
`

interface Props {
  educations: PublicUserProfile_publicUser_educations[]
}

const Educations: FC<Props> = ({ educations }) => {
  return (
    <EducationSelector>
      {educations.map((education) => (
        <div key={education.id}>
          <EducationHeading>{education.degree}</EducationHeading>
          <EducationParagraph>{education.school}</EducationParagraph>
          <EducationParagraph>
            {education.startYear} - {education.endYear}
          </EducationParagraph>
        </div>
      ))}
    </EducationSelector>
  )
}

export default Educations
