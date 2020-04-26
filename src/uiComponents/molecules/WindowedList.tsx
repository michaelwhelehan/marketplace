import React, { FC, useMemo } from 'react'
import {
  WindowScroller,
  List,
  CellMeasurerCache,
  CellMeasurer,
  AutoSizer,
} from 'react-virtualized'

type CellSizeGetter = (params: { index: number }) => number

type CellSize = CellSizeGetter | number

interface HeightProps {
  rowHeight: CellSize
  deferredMeasurementCache?: CellMeasurerCache
}

interface Props {
  rowHeight: number
  renderListItem: (listItem: any) => JSX.Element
  onLoadMore: (loadAmount: number) => Promise<any>
  list: any[]
  loading?: boolean
  loadAmount?: number
  heightCalculation?: 'static' | 'dynamic'
  scrollElement?: any
}

const WindowedList: FC<Props> = ({
  rowHeight,
  renderListItem,
  onLoadMore,
  list,
  loading = false,
  loadAmount = 15,
  heightCalculation = 'static',
  scrollElement = window,
}) => {
  const cache = useMemo(
    () =>
      new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: rowHeight,
      }),
    [rowHeight, list.length!],
  )

  // async function loadMoreRows() {
  //   await onLoadMore(loadAmount)
  // }

  function rowRenderer({ key, index, isScrolling, parent, style }) {
    if (heightCalculation === 'dynamic') {
      return (
        <CellMeasurer
          key={key}
          cache={cache}
          parent={parent}
          columnIndex={0}
          rowIndex={index}
        >
          {({ registerChild }) => (
            <div ref={registerChild} style={style}>
              {renderListItem({ index, ...list[index] })}
            </div>
          )}
        </CellMeasurer>
      )
    }

    return (
      <div key={key} style={style}>
        {renderListItem({ index, ...list[index] })}
      </div>
    )
  }

  const heightProps: HeightProps = {} as HeightProps
  if (heightCalculation === 'dynamic') {
    heightProps.deferredMeasurementCache = cache
    heightProps.rowHeight = cache.rowHeight
  } else {
    heightProps.rowHeight = rowHeight
  }

  return (
    <WindowScroller scrollElement={scrollElement}>
      {({ height, isScrolling, onChildScroll, scrollTop }) => (
        <AutoSizer disableHeight>
          {({ width }) => (
            <List
              autoHeight
              height={height}
              isScrolling={isScrolling}
              onScroll={onChildScroll}
              rowCount={list.length}
              rowRenderer={rowRenderer}
              scrollTop={scrollTop}
              width={width}
              overscanRowCount={2}
              {...heightProps}
            />
          )}
        </AutoSizer>
      )}
    </WindowScroller>
  )
}

export default WindowedList
