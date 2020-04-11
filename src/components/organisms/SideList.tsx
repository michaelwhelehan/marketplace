import React, { FC } from 'react'
import styled from 'styled-components'
import SideListCard from '../molecules/SideListCard'
import InfiniteList from '../molecules/InfiniteList'

const StyledSideList = styled.div`
  background: #f5f5f5;
  height: 100%;
`

const list = [
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  // And so on...
]

const ROW_HEIGHT = 150

const SideList: FC = () => {
  return (
    <StyledSideList>
      <InfiniteList
        list={list}
        renderListItem={listItem => <SideListCard {...listItem} />}
        onLoadMore={lastListItem => Promise.resolve()}
        rowHeight={ROW_HEIGHT}
      />
    </StyledSideList>
  )
}

export default SideList
