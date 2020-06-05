import React, { FC } from 'react'
import styled from 'styled-components'
import { white, borderColor, black } from '../../../styles/colors'
import { HeadingM } from '../../../uiComponents/atoms/Headings'
import { ParagraphS } from '../../../uiComponents/atoms/Paragraphs'

const Container = styled.div`
  background-color: ${white};
  border: 1px solid ${borderColor};
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.05);
`

const Header = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${borderColor};
`

const Body = styled.div`
  padding: 20px;
`

const StyledHeading = styled(HeadingM)`
  color: ${black};
`

const ActivityFeed: FC = () => {
  return (
    <Container>
      <Header>
        <StyledHeading>Activity Feed</StyledHeading>
      </Header>
      <Body>
        <ParagraphS>No news yet.</ParagraphS>
      </Body>
    </Container>
  )
}

export default ActivityFeed
