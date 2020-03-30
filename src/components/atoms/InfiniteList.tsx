import React, { FC } from 'react'
import { List, AutoSizer } from 'react-virtualized'

interface Props {
  list: any[]
  component: React.ComponentType<any>
  rowHeight: number
}

const InfiniteList: FC<Props> = ({ list, component, rowHeight }) => {
  const Component = component
  function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  }) {
    return (
      <div key={key} style={style}>
        <Component height={style.height} {...list[index]} />
      </div>
    )
  }

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          width={width}
          height={height}
          rowCount={list.length}
          rowHeight={rowHeight}
          rowRenderer={rowRenderer}
        />
      )}
    </AutoSizer>
  )
}

export default InfiniteList
