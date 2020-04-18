import React, { FC } from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import { gold, black } from '../../styles/colors'
import { ParagraphXXS } from './Paragraphs'
import { fwBold } from '../../styles/typography'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const StyledRating = styled(ParagraphXXS)`
  color: ${black};
  ${fwBold};
  margin-right: 5px;
`

interface Props {
  rating: number
  numRatings: number
}

const Rating: FC<Props> = ({ rating, numRatings }) => {
  return (
    <Container>
      <Icon name="MdStar" size={15} color={gold} spacingEnd={5} />
      <StyledRating as="span">{rating}</StyledRating>
      <ParagraphXXS as="span">({numRatings})</ParagraphXXS>
    </Container>
  )
}

export default Rating
