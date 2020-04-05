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
  loadMore: (lastListItem: any) => Promise<any[]>
  initialData?: any[]
  rowCount?: number
  threshold?: number
  direction?: 'forward' | 'reverse'
  heightCalculation?: 'static' | 'dynamic'
}

const InfiniteList: FC<Props> = ({
  rowHeight,
  renderListItem,
  loadMore,
  initialData = [],
  rowCount = 100,
  threshold = 15,
  direction = 'forward',
  heightCalculation = 'static',
}) => {
  const infiniteLoader = useRef<InfiniteLoader>(null)

  const [loadedData, setLoadedData] = useState<any[]>(initialData)
  const [loadingTop, setLoadingTop] = useState<boolean>(false)
  const [totalRowCount, setTotalRowCount] = useState<number>(rowCount)
  const [scrollToIndex, setScrollToIndex] = useState<number>(
    direction === 'forward' ? 0 : loadedData.length - 1,
  )
  const [ready, setReady] = useState<boolean>(false)
  const cache = useMemo(
    () =>
      new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: rowHeight,
      }),
    [rowHeight, loadedData.length!],
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setReady(true)
    }, 1000)

    return () => {
      clearTimeout(timeoutId)
      setReady(false)
    }
  }, [])

  function isRowLoaded({ index }) {
    return !!loadedData[index]
  }

  async function loadMoreRowsBottom({ startIndex }) {
    setScrollToIndex(loadedData.length - 1)
    const data = await loadMore(loadedData[startIndex - 1])
    const newLoadedData = [...loadedData, ...data]
    setLoadedData(newLoadedData)
    setScrollToIndex(newLoadedData.length - data.length - 1)
  }

  async function loadMoreRowsTop({ startIndex }) {
    if (ready && startIndex === 0 && !loadingTop) {
      setLoadingTop(true)
      setScrollToIndex(0)
      const data = await loadMore(loadedData[0])
      const newLoadedData = [...data, ...loadedData]
      setLoadedData(newLoadedData)
      setScrollToIndex(data.length)
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
          <div style={style}>
            {renderListItem({ index, ...loadedData[index] })}
          </div>
        </CellMeasurer>
      )
    }

    return (
      <div key={key} style={style}>
        {renderListItem({ index, ...loadedData[index] })}
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
      threshold={threshold}
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
              rowCount={loadedData.length}
              rowRenderer={rowRenderer}
              scrollToIndex={scrollToIndex}
              scrollToAlignment={direction === 'forward' ? 'end' : 'start'}
              {...heightProps}
            />
          )}
        </AutoSizer>
      )}
    </InfiniteLoader>
  )
}

export default InfiniteList
