import React, { FC, useRef } from 'react'
import DashboardPageContainer from '../DashboardPageContainer'
import { TabType } from './types'
import useTabs from '../../../hooks/useTabs'
import FilterPanel from './sections/FilterPanel'
import styled from 'styled-components'
import { HeadingM } from '../../../uiComponents/atoms/Headings'
import WindowedTable, {
  ColumnType,
} from '../../../uiComponents/molecules/WindowedTable'
import faker from 'faker'
import Avatar from '../../../uiComponents/atoms/Avatar'
import Button from '../../../uiComponents/atoms/Button'
import { formatDate } from '../../../utils/date'
import { useHistory } from 'react-router-dom'
import { black } from '../../../styles/colors'

const PageContainer = styled(DashboardPageContainer)`
  margin-top: 20px;
  padding: 20px;
`

const GridContainer = styled.div`
  margin-top: 20px;
`

const StyledHeading = styled(HeadingM)`
  color: ${black};
`

const list = [
  {
    avatar: faker.image.avatar(),
    title: faker.hacker.phrase().slice(0, 50).trim(),
    created: faker.date.past(),
    due: faker.date.future(),
    numOffers: Math.round(Math.random() * 10),
    averageOffer: Math.round(Math.random() * 1000),
    href: '/jobs/abc',
  },
  {
    avatar: faker.image.avatar(),
    title: faker.hacker.phrase().slice(0, 50).trim(),
    created: faker.date.past(),
    due: faker.date.future(),
    numOffers: Math.round(Math.random() * 10),
    averageOffer: Math.round(Math.random() * 1000),
    href: '/jobs/abc',
  },
  {
    avatar: faker.image.avatar(),
    title: faker.hacker.phrase().slice(0, 50).trim(),
    created: faker.date.past(),
    due: faker.date.future(),
    numOffers: Math.round(Math.random() * 10),
    averageOffer: Math.round(Math.random() * 1000),
    href: '/jobs/abc',
  },
  {
    avatar: faker.image.avatar(),
    title: faker.hacker.phrase().slice(0, 50).trim(),
    created: faker.date.past(),
    due: faker.date.future(),
    numOffers: Math.round(Math.random() * 10),
    averageOffer: Math.round(Math.random() * 1000),
    href: '/jobs/abc',
  },
  {
    avatar: faker.image.avatar(),
    title: faker.hacker.phrase().slice(0, 50).trim(),
    created: faker.date.past(),
    due: faker.date.future(),
    numOffers: Math.round(Math.random() * 10),
    averageOffer: Math.round(Math.random() * 1000),
    href: '/jobs/abc',
  },
  {
    avatar: faker.image.avatar(),
    title: faker.hacker.phrase().slice(0, 50).trim(),
    created: faker.date.past(),
    due: faker.date.future(),
    numOffers: Math.round(Math.random() * 10),
    averageOffer: Math.round(Math.random() * 1000),
    href: '/jobs/abc',
  },
  {
    avatar: faker.image.avatar(),
    title: faker.hacker.phrase().slice(0, 50).trim(),
    created: faker.date.past(),
    due: faker.date.future(),
    numOffers: Math.round(Math.random() * 10),
    averageOffer: Math.round(Math.random() * 1000),
    href: '/jobs/abc',
  },
  {
    avatar: faker.image.avatar(),
    title: faker.hacker.phrase().slice(0, 50).trim(),
    created: faker.date.past(),
    due: faker.date.future(),
    numOffers: Math.round(Math.random() * 10),
    averageOffer: Math.round(Math.random() * 1000),
    href: '/jobs/abc',
  },
  {
    avatar: faker.image.avatar(),
    title: faker.hacker.phrase().slice(0, 50).trim(),
    created: faker.date.past(),
    due: faker.date.future(),
    numOffers: Math.round(Math.random() * 10),
    averageOffer: Math.round(Math.random() * 1000),
    href: '/jobs/abc',
  },
]

const TasksPage: FC = () => {
  const { currentTab, updateTab } = useTabs<TabType>('active')
  const scrollElement = useRef(null)
  const history = useHistory()
  const columns: ColumnType[] = [
    {
      dataKey: 'avatar',
      width: 60,
      label: '',
      cellRenderer: ({ rowData }) => {
        return <Avatar src={rowData.avatar} size={50} />
      },
    },
    {
      dataKey: 'title',
      width: 100,
      flexGrow: 1,
      label: '',
    },
    {
      dataKey: 'created',
      width: 100,
      label: 'CREATED',
      cellRenderer: ({ rowData }) => {
        return formatDate(rowData.created, 'D MMM YYYY')
      },
    },
    {
      dataKey: 'due',
      width: 100,
      label: 'DUE',
      cellRenderer: ({ rowData }) => {
        return formatDate(rowData.due, 'D MMM YYYY')
      },
    },
    {
      dataKey: 'numOffers',
      width: 75,
      label: 'OFFERS',
    },
    {
      dataKey: 'averageOffer',
      width: 100,
      label: 'AVG. OFFER',
      cellRenderer: ({ rowData }) => {
        return `$${rowData.averageOffer}`
      },
    },
    {
      dataKey: 'href',
      width: 100,
      label: 'STATUS',
      cellRenderer: ({ rowData }) => {
        return (
          <Button
            onClick={() => {
              history.push(rowData.href)
            }}
          >
            View
          </Button>
        )
      },
    },
  ]

  return (
    <main ref={scrollElement}>
      <FilterPanel currentTab={currentTab} updateTab={updateTab} />
      <PageContainer>
        <StyledHeading>Active Jobs</StyledHeading>
        <GridContainer>
          <WindowedTable
            columns={columns}
            list={list}
            rowHeight={72}
            scrollElement={scrollElement.current ?? window}
          />
        </GridContainer>
      </PageContainer>
    </main>
  )
}

export default TasksPage
