import React, { FC } from 'react'
import { ParagraphS } from '../../../uiComponents/atoms/Paragraphs'
import DashboardPanel from '../Panels/DashboardPanel'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
`

const ActivityFeed: FC = () => {
  return (
    <DashboardPanel title="Activity Feed">
      <Container>
        <ParagraphS>No news yet.</ParagraphS>
      </Container>
    </DashboardPanel>
  )
}

export default ActivityFeed
