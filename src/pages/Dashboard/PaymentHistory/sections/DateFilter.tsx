import React, { FC } from 'react'
import styled from 'styled-components'
import { HeadingM } from '../../../../uiComponents/atoms/Headings'
import { black, primaryFontColor } from '../../../../styles/colors'
import { Controller } from 'react-hook-form'
import DateField from '../../../../uiComponents/atoms/DateField'
import { fwBold } from '../../../../styles/typography'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const DateFilterContainer = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled.label`
  ${fwBold};
  color: ${primaryFontColor};
  margin: 0 10px;
`

const StyledHeading = styled(HeadingM)`
  color: ${black};
`

interface Props {
  control: any
}

const DateFilter: FC<Props> = ({ control }) => {
  return (
    <Container>
      <StyledHeading>Payment History</StyledHeading>
      <DateFilterContainer>
        <Label>FROM:</Label>
        <Controller
          as={DateField}
          name="dateFrom"
          control={control}
          placeholder="Select a date"
          onChange={day => {
            // React Select return object instead of value for selection
            return day[0]
          }}
        />
        <Label>TO:</Label>
        <Controller
          as={DateField}
          name="dateTo"
          control={control}
          placeholder="Select a date"
          onChange={day => {
            // React Select return object instead of value for selection
            return day[0]
          }}
        />
      </DateFilterContainer>
    </Container>
  )
}

export default DateFilter
