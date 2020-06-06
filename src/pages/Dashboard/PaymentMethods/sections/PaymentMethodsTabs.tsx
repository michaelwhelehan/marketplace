import React, { FC } from 'react'
import Tab from '../../../../uiComponents/atoms/Tab'
import DashboardTabPanel from '../../Panels/DashboardTabPanel'
import { Tabs } from '../../../../types/tab'
import { TabType } from '../types'

interface Props {
  currentTab: TabType
  updateTab: (tab: TabType) => void
}

const PaymentMethodsTabs: FC<Props> = ({ currentTab, updateTab }) => {
  const tabs: Tabs<TabType>[] = [
    {
      title: 'Make Payments',
      active: currentTab === 'makePayments',
      type: 'makePayments',
    },
    {
      title: 'Receive Payments',
      active: currentTab === 'receivePayments',
      type: 'receivePayments',
    },
    {
      title: 'Purchase Credits',
      active: currentTab === 'purchaseCredits',
      type: 'purchaseCredits',
    },
  ]
  return (
    <DashboardTabPanel>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          title={tab.title}
          active={tab.active}
          onClick={() => updateTab(tab.type)}
          underline
        />
      ))}
    </DashboardTabPanel>
  )
}

export default PaymentMethodsTabs
