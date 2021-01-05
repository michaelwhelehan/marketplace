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
import { useGetUserTasksQuery } from './queries'
import { TaskStatusFilter } from '../../../types/task'
import Loader from '../../../uiComponents/atoms/Loader/Loader'

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

const TasksPage: FC = () => {
  const { data, loading } = useGetUserTasksQuery({
    pageSize: 20,
    filter: {
      status: [TaskStatusFilter.OPEN],
    },
  })
  console.log(loading, data)
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
          {loading ? (
            <Loader name="Dashboard" />
          ) : (
            <WindowedTable
              columns={columns}
              list={data.me.tasks.edges.map(({ node }) => ({
                avatar: node.owner.avatarUrl,
                title: node.title,
                created: node.created,
                due: node.dueDate,
                numOffers: node.numOffers,
                averageOffer: Math.round(Math.random() * 1000),
                href: `/jobs/${node.slug}`,
              }))}
              rowHeight={72}
              scrollElement={scrollElement.current ?? window}
            />
          )}
        </GridContainer>
      </PageContainer>
    </main>
  )
}

export default TasksPage
