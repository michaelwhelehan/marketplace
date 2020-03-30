import React, { FC } from 'react'
import styled from 'styled-components'
import SideListCard from './SideListCard'
import InfiniteList from '../atoms/InfiniteList'

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
        component={SideListCard}
        rowHeight={ROW_HEIGHT}
      />
    </StyledSideList>
  )
}

export default SideList
