import React, { FC } from 'react'
import styled from 'styled-components'
import { primaryColor } from '../../../styles/colors'
import WindowedTable, {
  ColumnType,
} from '../../../uiComponents/molecules/WindowedTable'
import { formatDate } from '../../../utils/date'
import faker from 'faker'
import { Link } from 'react-router-dom'
import { fwBold } from '../../../styles/typography'
import DashboardPanel from '../Panels/DashboardPanel'

const GridContainer = styled.div`
  margin-top: 5px;

  .ReactVirtualized__Grid {
    border: none !important;
  }
`

const TaskLink = styled(Link)`
  text-decoration: none;
  ${fwBold};
  color: ${primaryColor};
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${primaryColor};
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
    status: 'Open',
  },
  {
    avatar: faker.image.avatar(),
    title: faker.hacker.phrase().slice(0, 50).trim(),
    created: faker.date.past(),
    due: faker.date.future(),
    numOffers: Math.round(Math.random() * 10),
    averageOffer: Math.round(Math.random() * 1000),
    href: '/jobs/abc',
    status: 'Open',
  },
  {
    avatar: faker.image.avatar(),
    title: faker.hacker.phrase().slice(0, 50).trim(),
    created: faker.date.past(),
    due: faker.date.future(),
    numOffers: Math.round(Math.random() * 10),
    averageOffer: Math.round(Math.random() * 1000),
    href: '/jobs/abc',
    status: 'Open',
  },
  {
    avatar: faker.image.avatar(),
    title: faker.hacker.phrase().slice(0, 50).trim(),
    created: faker.date.past(),
    due: faker.date.future(),
    numOffers: Math.round(Math.random() * 10),
    averageOffer: Math.round(Math.random() * 1000),
    href: '/jobs/abc',
    status: 'Open',
  },
  {
    avatar: faker.image.avatar(),
    title: faker.hacker.phrase().slice(0, 50).trim(),
    created: faker.date.past(),
    due: faker.date.future(),
    numOffers: Math.round(Math.random() * 10),
    averageOffer: Math.round(Math.random() * 1000),
    href: '/jobs/abc',
    status: 'Open',
  },
]

const RecentTasks: FC = () => {
  const columns: ColumnType[] = [
    {
      dataKey: 'title',
      width: 100,
      flexGrow: 1,
      label: 'Job',
      cellRenderer: ({ rowData }) => {
        return <TaskLink to={rowData.href}>{rowData.title}</TaskLink>
      },
    },
    {
      dataKey: 'numOffers',
      width: 60,
      label: 'Offers',
    },
    {
      dataKey: 'averageOffer',
      width: 75,
      label: 'Avg. Offer',
      cellRenderer: ({ rowData }) => {
        return `$${rowData.averageOffer}`
      },
    },
    {
      dataKey: 'due',
      width: 100,
      label: 'Due',
      cellRenderer: ({ rowData }) => {
        return formatDate(rowData.due, 'D MMM YYYY')
      },
    },
    {
      dataKey: 'status',
      width: 60,
      label: 'Status',
    },
  ]

  return (
    <DashboardPanel
      title="Recent Jobs"
      footerContent={
        <StyledLink to={'/dashboard/my-jobs'}>View All</StyledLink>
      }
    >
      <GridContainer>
        <WindowedTable
          columns={columns}
          list={list}
          rowHeight={72}
          scrollElement={window}
        />
      </GridContainer>
    </DashboardPanel>
  )
}

export default RecentTasks
