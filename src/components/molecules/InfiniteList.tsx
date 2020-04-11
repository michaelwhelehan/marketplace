import React, { FC, useMemo, useState, useRef, useEffect } from 'react'
import {
  InfiniteLoader,
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
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
  onLoadMore: (lastListItem: any) => Promise<any>
  list: any[]
  loading?: boolean
  rowCount?: number
  loadAmount?: number
  direction?: 'forward' | 'reverse'
  heightCalculation?: 'static' | 'dynamic'
}

const InfiniteList: FC<Props> = ({
  rowHeight,
  renderListItem,
  onLoadMore,
  list,
  loading = false,
  rowCount = 100,
  loadAmount = 15,
  direction = 'forward',
  heightCalculation = 'static',
}) => {
  const infiniteLoader = useRef<InfiniteLoader>(null)
  const [loadingTop, setLoadingTop] = useState<boolean>(false)
  const [totalRowCount, setTotalRowCount] = useState<number>(rowCount)
  const [scrollToIndex, setScrollToIndex] = useState<number>(
    direction === 'forward' ? 0 : list.length - 1,
  )
  const [ready, setReady] = useState<boolean>(false)
  const cache = useMemo(
    () =>
      new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: rowHeight,
      }),
    [rowHeight, list.length!],
  )

  console.log(cache, list.length)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setReady(true)
    }, 5000)

    return () => {
      clearTimeout(timeoutId)
      setReady(false)
    }
  }, [])

  function isRowLoaded({ index }) {
    return !!list[index]
  }

  async function loadMoreRowsBottom({ startIndex }) {
    await onLoadMore(list[startIndex - 1])
  }

  async function loadMoreRowsTop({ startIndex }) {
    console.log(startIndex)
    // if (ready && startIndex === 0 && !loadingTop) {
    //   setLoadingTop(true)
    //   setScrollToIndex(0)
    //   await onLoadMore(list[0])
    //   setScrollToIndex(loadAmount)
    //   setLoadingTop(false)
    // }
  }

  function rowRenderer({ key, index, parent, style }) {
    if (heightCalculation === 'dynamic') {
      return (
        <CellMeasurer
          key={key}
          cache={cache}
          parent={parent}
          columnIndex={0}
          rowIndex={index}
        >
          <div style={style}>{renderListItem({ index, ...list[index] })}</div>
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
    <InfiniteLoader
      ref={infiniteLoader}
      isRowLoaded={isRowLoaded}
      loadMoreRows={props => {
        if (direction === 'forward') {
          return loadMoreRowsBottom(props)
        }
        return Promise.resolve()
      }}
      rowCount={totalRowCount}
      threshold={loadAmount}
    >
      {({ onRowsRendered, registerChild }) => (
        <AutoSizer>
          {({ height, width }) => (
            <List
              onRowsRendered={props => {
                if (direction === 'reverse') {
                  loadMoreRowsTop(props)
                }
                onRowsRendered(props)
              }}
              ref={registerChild}
              width={width}
              height={height}
              rowCount={list.length}
              rowRenderer={rowRenderer}
              scrollToIndex={direction === 'forward' ? -1 : scrollToIndex}
              scrollToAlignment={direction === 'forward' ? 'auto' : 'start'}
              {...heightProps}
            />
          )}
        </AutoSizer>
      )}
    </InfiniteLoader>
  )
}

export default InfiniteList
