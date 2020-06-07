import React, { FC } from 'react'
import styled from 'styled-components'
import { white, borderColor, primaryColor } from '../../../../../styles/colors'
import { featherShadow } from '../../../../../styles/shadows'
import { ParagraphS } from '../../../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../../../styles/typography'
import Icon from '../../../../../uiComponents/atoms/Icon'

const Container = styled.div`
  background-color: ${white};
  border: 1px solid ${borderColor};
  ${featherShadow};
  padding: 20px;
  position: sticky;
  top: 0;
`

const SummaryValue = styled(ParagraphS)`
  display: flex;
  align-items: center;
  ${fwBold};

  span {
    margin-left: 10px;
  }

  &:not(:first-child) {
    margin-top: 20px;
  }
`

interface Props {}

const ProgressSummary: FC<Props> = () => {
  return (
    <Container>
      <SummaryValue>
        <Icon name="MdCheckCircle" color={primaryColor} size={30} />
        <span>Offer Accepted</span>
      </SummaryValue>
      <SummaryValue>
        <Icon name="MdCheckCircle" color={primaryColor} size={30} />
        <span>Order in Progress</span>
      </SummaryValue>
      <SummaryValue>
        <Icon name="MdCheckCircle" color={primaryColor} size={30} />
        <span>Review the Delivery</span>
      </SummaryValue>
      <SummaryValue>
        <Icon name="MdCheckCircle" color={primaryColor} size={30} />
        <span>Task Complete</span>
      </SummaryValue>
    </Container>
  )
}

export default ProgressSummary
