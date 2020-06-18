import React, { FC } from 'react'
import styled from 'styled-components'
import { gold, white, primaryFontColor } from '../../styles/colors'
import Icon from '../atoms/Icon'
import { ParagraphXS, ParagraphXXXS } from '../atoms/Paragraphs'
import SelectField from '../atoms/SelectField'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const RatingDescription = styled(ParagraphXS)`
  margin: 5px 0;
`

const ReviewSummaryStart = styled.div``

const ReviewSummaryEnd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const SummaryRow = styled.div`
  display: flex;
`

const SummaryAmount = styled(ParagraphXXXS)`
  margin-left: 5px;
`

const filterStyles = {
  control: styles => ({
    ...styles,
    border: 'none',
    cursor: 'pointer',
    width: '180px',
    padding: 0,
  }),
  indicatorSeparator: styles => ({ ...styles, backgroundColor: white }),
  dropdownIndicator: styles => ({ ...styles, color: primaryFontColor }),
  placeholder: styles => ({ ...styles, color: primaryFontColor }),
}

interface Props {
  rating: number
  numRatings: number
}

const ReviewSummary: FC<Props> = ({ rating, numRatings }) => {
  const summaryArr = [[1, 2, 3, 4, 5], [1, 2, 3, 4], [1, 2, 3], [1, 2], [1]]
  return (
    <Container>
      <ReviewSummaryStart>
        {Array(rating)
          .fill(0)
          .map((_, index) => (
            <Icon key={index} name="MdStar" size={20} color={gold} />
          ))}
        <RatingDescription>
          {rating} stars from {numRatings} reviews
        </RatingDescription>
        <SelectField
          placeholder="Most Relevant"
          options={[{ label: 'Most Relevant', value: 'all' }]}
          styles={filterStyles}
        />
      </ReviewSummaryStart>
      <ReviewSummaryEnd>
        {summaryArr.map((i, index) => (
          <SummaryRow key={index}>
            {i.map(j => (
              <Icon key={j} name="MdStar" size={15} color={gold} />
            ))}
            <SummaryAmount as="span">10</SummaryAmount>
          </SummaryRow>
        ))}
      </ReviewSummaryEnd>
    </Container>
  )
}

export default ReviewSummary
