import React, { FC } from 'react'
import styled from 'styled-components'
import SideListCard from './SideListCard'
import InfiniteList from '../../../uiComponents/molecules/InfiniteList'
import { TaskType } from '../../../types/task'

const StyledSideList = styled.div`
  background: #f5f5f5;
  height: 100%;
`

const ROW_HEIGHT = 160

interface Props {
  tasks: TaskType[]
  tasksLoadAmount: number
  tasksLoading: boolean
  onLoadMoreTasks: (loadAmount: number) => Promise<any>
}

const SideList: FC<Props> = ({
  tasks,
  tasksLoading,
  tasksLoadAmount,
  onLoadMoreTasks,
}) => {
  if (!tasks || !tasks.length) {
    return null
  }

  return (
    <StyledSideList>
      <InfiniteList
        loading={tasksLoading}
        list={tasks}
        loadAmount={tasksLoadAmount}
        renderListItem={listItem => <SideListCard task={listItem} />}
        onLoadMore={onLoadMoreTasks}
        rowHeight={ROW_HEIGHT}
      />
    </StyledSideList>
  )
}

export default SideList
