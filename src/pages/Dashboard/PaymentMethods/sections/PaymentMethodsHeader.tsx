import React, { FC } from 'react'
import styled from 'styled-components'
import { HeadingM } from '../../../../uiComponents/atoms/Headings'
import { borderColor, black } from '../../../../styles/colors'

const HeaderContainer = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${borderColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledHeading = styled(HeadingM)`
  color: ${black};
`

const PaymentMethodsHeader: FC = () => {
  return (
    <HeaderContainer>
      <StyledHeading>Payment Methods</StyledHeading>
    </HeaderContainer>
  )
}

export default PaymentMethodsHeader
