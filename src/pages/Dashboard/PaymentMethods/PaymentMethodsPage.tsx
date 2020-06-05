import React, { FC } from 'react'
import DashboardPageContainer from '../DashboardPageContainer'
import PaymentMethodsTabs from './sections/PaymentMethodsTabs'
import useTabs from '../../../hooks/useTabs'
import { TabType } from './types'
import PaymentMethodsHeader from './sections/PaymentMethodsHeader'
import styled from 'styled-components'
import MakePayments from './sections/MakePayments'

const Container = styled.div`
  padding: 20px;
`

const PaymentMethodsPage: FC = () => {
  const { currentTab, updateTab } = useTabs<TabType>('makePayments')

  function renderTab() {
    switch (currentTab) {
      case 'makePayments':
        return <MakePayments />
      default:
        return null
    }
  }

  return (
    <DashboardPageContainer>
      <PaymentMethodsHeader />
      <PaymentMethodsTabs currentTab={currentTab} updateTab={updateTab} />
      <Container>{renderTab()}</Container>
    </DashboardPageContainer>
  )
}

export default PaymentMethodsPage
