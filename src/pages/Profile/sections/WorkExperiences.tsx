import React, { FC } from 'react'
import styled from 'styled-components'
import { ParagraphS, ParagraphXS } from '../../../uiComponents/atoms/Paragraphs'
import { fwMediumBold } from '../../../styles/typography'
import { black } from '../../../styles/colors'
import { PublicUserProfile_publicUser_workExperiences } from '../gqlTypes/PublicUserProfile'
import { formatDate } from '../../../utils/date'

export const WorkExperienceSelector = styled.div``

const WorkExperienceHeading = styled(ParagraphS)`
  color: ${black};
  ${fwMediumBold};
  margin-bottom: 5px;
`

const WorkExperienceParagraph = styled(ParagraphXS)`
  margin-bottom: 5px;
`

const WorkExperienceParagraphDescription = styled(ParagraphXS)`
  color: ${black};
`

interface Props {
  workExperiences: PublicUserProfile_publicUser_workExperiences[]
}

const WorkExperiences: FC<Props> = ({ workExperiences }) => {
  return (
    <WorkExperienceSelector>
      {workExperiences.map((workExperience) => (
        <div key={workExperience.id}>
          <WorkExperienceHeading>{workExperience.title}</WorkExperienceHeading>
          <WorkExperienceParagraph>
            {workExperience.company} -{' '}
            {formatDate(workExperience.startDate, 'MMM YYYY')} -{' '}
            {formatDate(workExperience.endDate, 'MMM YYYY')}
          </WorkExperienceParagraph>
          {workExperience.location ? (
            <WorkExperienceParagraph>
              {workExperience.location}
            </WorkExperienceParagraph>
          ) : null}
          <WorkExperienceParagraphDescription>
            {workExperience.description}
          </WorkExperienceParagraphDescription>
        </div>
      ))}
    </WorkExperienceSelector>
  )
}

export default WorkExperiences
