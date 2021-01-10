import React, { FC, useRef } from 'react'
import DashboardPageContainer from '../DashboardPageContainer'
import { TabType } from './types'
import useTabs from '../../../hooks/useTabs'
import TopFilterPanel from './sections/TopFilterPanel'
import BottomFilterPanel from './sections/BottomFilterPanel'
import DateFilter from './sections/DateFilter'
import styled from 'styled-components'
import WindowedTable, {
  ColumnType,
} from '../../../uiComponents/molecules/WindowedTable'
import faker from 'faker'
import Button from '../../../uiComponents/atoms/Button'
import { formatDate } from '../../../utils/date'
import { useHistory } from 'react-router-dom'
import { primaryColor } from '../../../styles/colors'
import { useForm } from 'react-hook-form'

const PageContainer = styled(DashboardPageContainer)`
  margin: 20px 0;
  padding: 20px;
`

const GridContainer = styled.div`
  margin-top: 20px;
`

const list = [
  {
    date: faker.date.past(),
    type: 'Earned',
    task: faker.hacker.phrase().slice(0, 50).trim(),
    amount: Math.round(Math.random() * 1000),
    status: 'Successful',
    href: '',
  },
  {
    date: faker.date.past(),
    type: 'Earned',
    task: faker.hacker.phrase().slice(0, 50).trim(),
    amount: Math.round(Math.random() * 1000),
    status: 'Successful',
    href: '',
  },
  {
    date: faker.date.past(),
    type: 'Earned',
    task: faker.hacker.phrase().slice(0, 50).trim(),
    amount: Math.round(Math.random() * 1000),
    status: 'Successful',
    href: '',
  },
  {
    date: faker.date.past(),
    type: 'Earned',
    task: faker.hacker.phrase().slice(0, 50).trim(),
    amount: Math.round(Math.random() * 1000),
    status: 'Successful',
    href: '',
  },
  {
    date: faker.date.past(),
    type: 'Earned',
    task: faker.hacker.phrase().slice(0, 50).trim(),
    amount: Math.round(Math.random() * 1000),
    status: 'Successful',
    href: '',
  },
  {
    date: faker.date.past(),
    type: 'Earned',
    task: faker.hacker.phrase().slice(0, 50).trim(),
    amount: Math.round(Math.random() * 1000),
    status: 'Successful',
    href: '',
  },
  {
    date: faker.date.past(),
    type: 'Earned',
    task: faker.hacker.phrase().slice(0, 50).trim(),
    amount: Math.round(Math.random() * 1000),
    status: 'Successful',
    href: '',
  },
  {
    date: faker.date.past(),
    type: 'Earned',
    task: faker.hacker.phrase().slice(0, 50).trim(),
    amount: Math.round(Math.random() * 1000),
    status: 'Successful',
    href: '',
  },
  {
    date: faker.date.past(),
    type: 'Earned',
    task: faker.hacker.phrase().slice(0, 50).trim(),
    amount: Math.round(Math.random() * 1000),
    status: 'Successful',
    href: '',
  },
  {
    date: faker.date.past(),
    type: 'Earned',
    task: faker.hacker.phrase().slice(0, 50).trim(),
    amount: Math.round(Math.random() * 1000),
    status: 'Successful',
    href: '',
  },
]

const PaymentHistoryPage: FC = () => {
  const { control } = useForm({
    defaultValues: { showAmount: { label: '10', value: 10 } },
  })
  const { currentTab, updateTab } = useTabs<TabType>({ initialTab: 'earned' })
  const scrollElement = useRef(null)
  const history = useHistory()
  const columns: ColumnType[] = [
    {
      dataKey: 'date',
      width: 100,
      label: 'DATE',
      cellRenderer: ({ rowData }) => {
        return formatDate(rowData.due, 'D MMM YYYY')
      },
    },
    {
      dataKey: 'type',
      width: 75,
      label: 'TYPE',
    },
    {
      dataKey: 'task',
      width: 100,
      flexGrow: 1,
      label: 'TASK',
    },
    {
      dataKey: 'amount',
      width: 75,
      label: 'AMOUNT',
      cellRenderer: ({ rowData }) => {
        return `$${rowData.amount}`
      },
    },
    {
      dataKey: 'status',
      width: 100,
      label: 'STATUS',
      cellRenderer: ({ rowData }) => {
        return <span style={{ color: primaryColor }}>{rowData.status}</span>
      },
    },
    {
      dataKey: 'href',
      width: 120,
      label: 'DOWNLOAD',
      cellRenderer: ({ rowData }) => {
        return (
          <Button
            onClick={() => {
              history.push(rowData.href)
            }}
          >
            Download
          </Button>
        )
      },
    },
  ]

  return (
    <main ref={scrollElement}>
      <TopFilterPanel currentTab={currentTab} updateTab={updateTab} />
      <PageContainer>
        <DateFilter control={control} />
        <GridContainer>
          <WindowedTable
            columns={columns}
            list={list}
            rowHeight={72}
            scrollElement={scrollElement.current ?? window}
          />
        </GridContainer>
      </PageContainer>
      <BottomFilterPanel control={control} />
    </main>
  )
}

export default PaymentHistoryPage
