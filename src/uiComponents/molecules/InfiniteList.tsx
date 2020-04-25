import React, { FC, useMemo, useState, useRef, useEffect } from 'react'
import {
  InfiniteLoader,
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized'
import { deepEquals } from '../../utils/compare'
import usePrevious from '../../hooks/usePrevious'

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
  rowCount?: number
  overscanRowCount?: number
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
  overscanRowCount = 10,
  loadAmount = 15,
  direction = 'forward',
  heightCalculation = 'static',
}) => {
  const infiniteLoader = useRef<InfiniteLoader>(null)
  const [loadingTop, setLoadingTop] = useState<boolean>(false)
  const [totalRowCount, setTotalRowCount] = useState<number>(rowCount)
  const [scrollToIndex, setScrollToIndex] = useState<number>(
    direction === 'forward' ? -1 : list.length - 1,
  )
  const [ready, setReady] = useState<boolean>(false)
  const prevList = usePrevious(list)
  const cache = useMemo(
    () =>
      new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: rowHeight,
      }),
    [rowHeight, list.length!],
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setReady(true)
    }, 500)

    return () => {
      clearTimeout(timeoutId)
      setReady(false)
    }
  }, [])

  useEffect(() => {
    if (prevList) {
      const firstChanged = !deepEquals(list[0], prevList[0])
      const lastChanged = !deepEquals(
        list[list.length - 1],
        prevList[prevList.length - 1],
      )
      if (firstChanged) {
        setScrollToIndex(loadAmount)
      } else if (lastChanged) {
        setScrollToIndex(list.length - 1)
      }
    }
  }, [list, prevList, loadAmount])

  function isRowLoaded({ index }) {
    return !!list[index]
  }

  async function loadMoreRowsBottom() {
    await onLoadMore(loadAmount)
  }

  async function loadMoreRowsTop({ startIndex }) {
    if (ready && startIndex === 0 && !loadingTop) {
      setLoadingTop(true)
      //setScrollToIndex(0)
      await onLoadMore(loadAmount)
      setLoadingTop(false)
    }
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
    <InfiniteLoader
      ref={infiniteLoader}
      isRowLoaded={isRowLoaded}
      loadMoreRows={() => {
        if (direction === 'forward') {
          return loadMoreRowsBottom()
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
              overscanRowCount={overscanRowCount}
              overscanIndicesGetter={({
                cellCount,
                overscanCellsCount,
                scrollDirection,
                startIndex,
                stopIndex,
              }) => {
                // todo: Come up with a better way to handle this initially when direction === 'reverse'
                return {
                  overscanStartIndex: Math.max(0, startIndex - 20),
                  overscanStopIndex: Math.min(
                    cellCount - 1,
                    stopIndex + overscanCellsCount,
                  ),
                }
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
