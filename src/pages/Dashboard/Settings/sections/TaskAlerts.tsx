import React, { FC } from 'react'
import styled from 'styled-components'
import {
  ParagraphM,
  ParagraphS,
} from '../../../../uiComponents/atoms/Paragraphs'
import { black } from '../../../../styles/colors'
import { fwBold } from '../../../../styles/typography'
import CheckboxField from '../../../../uiComponents/atoms/CheckboxField'

const Container = styled.div`
  padding: 20px;
`

const Heading = styled(ParagraphM)`
  ${fwBold};
  color: ${black};
  margin-bottom: 10px;
`

const Description = styled(ParagraphS)`
  margin-bottom: 10px;
`

const TaskAlerts: FC = () => {
  return (
    <Container>
      <Heading>Job Alerts</Heading>
      <Description>
        These are emails and push notifications about tasks you may be
        interested in.
      </Description>
      <CheckboxField
        name="enableAlerts"
        label="Turn on job alerts to get notified about jobs we think you'd like"
        value="enableAlerts"
      />
    </Container>
  )
}

export default TaskAlerts
