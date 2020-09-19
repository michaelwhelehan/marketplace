import React, { FC } from 'react'
import styled from 'styled-components'
import { primaryColor } from '../../../../../styles/colors'
import { ParagraphS } from '../../../../../uiComponents/atoms/Paragraphs'
import { fwBold } from '../../../../../styles/typography'
import Icon from '../../../../../uiComponents/atoms/Icon'
import { DashboardPanelContainer } from '../../../Panels/DashboardPanel'

const Container = styled(DashboardPanelContainer)`
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
    <Container padded>
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
        <span>Job Complete</span>
      </SummaryValue>
    </Container>
  )
}

export default ProgressSummary
