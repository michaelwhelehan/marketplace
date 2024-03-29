import React, { FC } from 'react'
import styled from 'styled-components'
import { black } from '../../../styles/colors'
import { ParagraphS } from '../../atoms/Paragraphs'
import { HeadingS } from '../../atoms/Headings'

const Container = styled.article`
  padding: 20px;
`

const Title = styled(HeadingS)`
  color: ${black};
`

const StyledParagraphS = styled(ParagraphS)`
  margin-top: 10px;
`

interface Props {
  details: string
}

const TDPDetails: FC<Props> = ({ details }) => {
  return (
    <Container>
      <Title>Details</Title>
      <StyledParagraphS>{details}</StyledParagraphS>
    </Container>
  )
}

export default TDPDetails
