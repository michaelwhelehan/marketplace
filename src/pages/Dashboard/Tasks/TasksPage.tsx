import React, { FC } from 'react'
import DashboardPageContainer from '../DashboardPageContainer'
import { TabType } from './types'
import useTabs from '../../../hooks/useTabs'
import TasksFilterPanel from './sections/TasksFilterPanel'
import styled from 'styled-components'
import { HeadingM } from '../../../uiComponents/atoms/Headings'
import WindowedTable, {
  ColumnType,
} from '../../../uiComponents/molecules/WindowedTable'

const TasksPageContainer = styled(DashboardPageContainer)`
  margin-top: 20px;
  padding: 20px;
`

const GridContainer = styled.div`
  margin-top: 20px;
  height: calc(100vh - 40px - 58px - 66px - 100px);
`

const list = [
  { avatar: '' },
  { avatar: '' },
  { avatar: '' },
  { avatar: '' },
  { avatar: '' },
  { avatar: '' },
  { avatar: '' },
  { avatar: '' },
  { avatar: '' },
  { avatar: '' },
  { avatar: '' },
  { avatar: '' },
]

const TasksPage: FC = () => {
  const { currentTab, updateTab } = useTabs<TabType>('active')
  const columns: ColumnType[] = [
    { dataKey: 'avatar', width: 50, label: 'Avatar' },
  ]

  return (
    <>
      <TasksFilterPanel currentTab={currentTab} updateTab={updateTab} />
      <TasksPageContainer>
        <HeadingM>Active Tasks</HeadingM>
        <GridContainer>
          <WindowedTable columns={columns} list={list} />
        </GridContainer>
      </TasksPageContainer>
    </>
  )
}

export default TasksPage
