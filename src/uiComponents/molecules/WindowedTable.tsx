import React, { FC, useState } from 'react'
import { AutoSizer, Table, SortDirection, Column } from 'react-virtualized'
import { borderColor } from '../../styles/colors'

export type ColumnType = {
  dataKey: string
  label?: string
  disableSort?: boolean
  width: number
  flexGrow?: number
}

interface Props {
  columns: ColumnType[]
  list: unknown[]
  disableHeader?: boolean
}

const WindowedTable: FC<Props> = ({ columns, list, disableHeader = false }) => {
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
    <AutoSizer>
      {({ width, height }) => (
        <Table
          ref="Table"
          disableHeader={disableHeader}
          headerHeight={40}
          height={height}
          noRowsRenderer={noRowsRenderer}
          overscanRowCount={10}
          rowHeight={40}
          rowGetter={rowGetter}
          rowCount={list.length}
          sort={sort}
          sortBy={sortBy}
          sortDirection={sortDirection}
          width={width}
          gridStyle={{ border: `1px solid ${borderColor}` }}
          rowStyle={{ borderBottom: `1px solid ${borderColor}` }}
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
  )
}

export default WindowedTable
