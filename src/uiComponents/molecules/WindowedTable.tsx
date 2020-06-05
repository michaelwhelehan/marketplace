import React, { FC, useState } from 'react'
import {
  AutoSizer,
  Table,
  SortDirection,
  Column,
  TableCellRenderer,
  WindowScroller,
} from 'react-virtualized'
import { borderColor, primaryFontColor } from '../../styles/colors'
import 'react-virtualized/styles.css'

export type ColumnType = {
  dataKey: string
  label?: string
  disableSort?: boolean
  width: number
  flexGrow?: number
  cellRenderer?: TableCellRenderer
}

interface Props {
  columns: ColumnType[]
  list: unknown[]
  rowHeight: number
  scrollElement?: any
  disableHeader?: boolean
}

const WindowedTable: FC<Props> = ({
  columns,
  list,
  rowHeight,
  scrollElement,
  disableHeader = false,
}) => {
  const [sortBy, setSortBy] = useState('index')
  const [sortDirection, setSortDirection] = useState(SortDirection.ASC)

  function rowGetter({ index }) {
    return list[index]
  }

  function sort({ sortBy, sortDirection }) {}

  function noRowsRenderer() {
    return <div>No data to show</div>
  }

  return (
    <WindowScroller scrollElement={scrollElement}>
      {({ height, isScrolling, onChildScroll, scrollTop }) => (
        <AutoSizer disableHeight>
          {({ width }) => (
            <Table
              ref="Table"
              autoHeight
              height={height}
              disableHeader={disableHeader}
              headerHeight={40}
              noRowsRenderer={noRowsRenderer}
              overscanRowCount={10}
              isScrolling={isScrolling}
              onChildScroll={onChildScroll}
              scrollTop={scrollTop}
              rowHeight={rowHeight}
              rowGetter={rowGetter}
              rowCount={list.length}
              sort={sort}
              sortBy={sortBy}
              sortDirection={sortDirection}
              width={width}
              gridStyle={{ border: `1px solid ${borderColor}` }}
              rowStyle={{ borderBottom: `1px solid ${borderColor}` }}
              headerStyle={{ color: primaryFontColor, textTransform: 'none' }}
            >
              {columns.map((column, index) => (
                <Column
                  key={index}
                  style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                  {...column}
                />
              ))}
            </Table>
          )}
        </AutoSizer>
      )}
    </WindowScroller>
  )
}

export default WindowedTable
