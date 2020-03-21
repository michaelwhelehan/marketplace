import React, { FC } from 'react'
import styled from 'styled-components'
import { List, AutoSizer } from 'react-virtualized'
import SideListCard from './SideListCard'

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

const ROW_HEIGHT = 200

function rowRenderer({
  key, // Unique key within array of rows
  index, // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  style, // Style object to be applied to row (to position it)
}) {
  return (
    <div key={key} style={style}>
      <SideListCard name={list[index]} height={style.height} />
    </div>
  )
}

const SideList: FC = () => {
  return (
    <StyledSideList>
      <AutoSizer>
        {({ height, width }) => (
          <List
            width={width}
            height={height}
            rowCount={list.length}
            rowHeight={ROW_HEIGHT}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </StyledSideList>
  )
}

export default SideList
