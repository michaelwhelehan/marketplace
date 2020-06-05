import React, { FC } from 'react'
import styled from 'styled-components'
import { white, borderColor, black, primaryColor } from '../../../styles/colors'
import { HeadingM } from '../../../uiComponents/atoms/Headings'
import WindowedTable, {
  ColumnType,
} from '../../../uiComponents/molecules/WindowedTable'
import { formatDate } from '../../../utils/date'
import faker from 'faker'
import { Link } from 'react-router-dom'
import { fwBold } from '../../../styles/typography'

const Container = styled.div`
  background-color: ${white};
  border: 1px solid ${borderColor};
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.05);
`

const Header = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${borderColor};
`

const Footer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledHeading = styled(HeadingM)`
  color: ${black};
`

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
    title: faker.hacker
      .phrase()
      .slice(0, 50)
      .trim(),
    created: faker.date.past(),
    due: faker.date.future(),
    numOffers: Math.round(Math.random() * 10),
    averageOffer: Math.round(Math.random() * 1000),
    href: '/try-to-navigate-the-sas-application-maybe-it-will',
    status: 'Open',
  },
  {
    avatar: faker.image.avatar(),
    title: faker.hacker
      .phrase()
      .slice(0, 50)
      .trim(),
    created: faker.date.past(),
    due: faker.date.future(),
    numOffers: Math.round(Math.random() * 10),
    averageOffer: Math.round(Math.random() * 1000),
    href: '/try-to-navigate-the-sas-application-maybe-it-will',
    status: 'Open',
  },
  {
    avatar: faker.image.avatar(),
    title: faker.hacker
      .phrase()
      .slice(0, 50)
      .trim(),
    created: faker.date.past(),
    due: faker.date.future(),
    numOffers: Math.round(Math.random() * 10),
    averageOffer: Math.round(Math.random() * 1000),
    href: '/try-to-navigate-the-sas-application-maybe-it-will',
    status: 'Open',
  },
  {
    avatar: faker.image.avatar(),
    title: faker.hacker
      .phrase()
      .slice(0, 50)
      .trim(),
    created: faker.date.past(),
    due: faker.date.future(),
    numOffers: Math.round(Math.random() * 10),
    averageOffer: Math.round(Math.random() * 1000),
    href: '/try-to-navigate-the-sas-application-maybe-it-will',
    status: 'Open',
  },
  {
    avatar: faker.image.avatar(),
    title: faker.hacker
      .phrase()
      .slice(0, 50)
      .trim(),
    created: faker.date.past(),
    due: faker.date.future(),
    numOffers: Math.round(Math.random() * 10),
    averageOffer: Math.round(Math.random() * 1000),
    href: '/try-to-navigate-the-sas-application-maybe-it-will',
    status: 'Open',
  },
]

const RecentTasks: FC = () => {
  const columns: ColumnType[] = [
    {
      dataKey: 'title',
      width: 100,
      flexGrow: 1,
      label: 'Task',
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
        return `R${rowData.averageOffer}`
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
    <Container>
      <Header>
        <StyledHeading>Recent Tasks</StyledHeading>
      </Header>
      <GridContainer>
        <WindowedTable
          columns={columns}
          list={list}
          rowHeight={72}
          scrollElement={window}
        />
      </GridContainer>
      <Footer>
        <StyledLink to={'/dashboard/my-tasks'}>View All</StyledLink>
      </Footer>
    </Container>
  )
}

export default RecentTasks
