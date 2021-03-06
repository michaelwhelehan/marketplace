import React, { FC, useState } from 'react'
import styled from 'styled-components'
import ReactMapGL from 'react-map-gl'
import mapboxgl from 'mapbox-gl'
import MapMarker from '../../../uiComponents/atoms/MapMarker'

// eslint-disable-next-line import/no-webpack-loader-syntax
;(mapboxgl as any).workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default

type ViewPortType = {
  latitude: number
  longitude: number
  zoom: number
}

// todo: extract to env var
const TOKEN =
  'pk.eyJ1IjoibXdoZWxlaGFuIiwiYSI6ImNrODBpdm5vcTBndnczc211MGxmdzl6azYifQ.Q_qr9Jta1_VKX2YwlLAtng'

const StyledDiv = styled.div`
  height: calc(100vh - 64px - 56px - 2px);
`

const Map: FC = () => {
  const [viewport, setViewport] = useState<ViewPortType>({
    latitude: 13.811053,
    longitude: 22.636039,
    zoom: 1,
  })

  return (
    <StyledDiv>
      <ReactMapGL
        mapboxApiAccessToken={TOKEN}
        width="100%"
        height="100%"
        {...viewport}
        onViewportChange={setViewport}
      >
        <MapMarker latitude={50.66927} longitude={9.910699} />
        <MapMarker latitude={38.522575} longitude={-100.843392} />
        <MapMarker latitude={54.65491} longitude={-122.552376} />
        <MapMarker latitude={-12.243153} longitude={-52.85511} />
        <MapMarker latitude={-32.393116} longitude={150.694859} />
        <MapMarker latitude={-39.2273} longitude={176.798375} />
        <MapMarker latitude={1.344431} longitude={103.809967} />
        <MapMarker latitude={34.68212} longitude={137.522485} />
        <MapMarker latitude={22.373595} longitude={113.952378} />
        <MapMarker latitude={59.861605} longitude={29.938101} />
        <MapMarker latitude={62.801611} longitude={16.85037} />
        <MapMarker latitude={24.914688} longitude={55.416027} />
        <MapMarker latitude={-0.717899} longitude={37.745118} />
        <MapMarker latitude={-34.015745} longitude={18.50351} />
        <MapMarker latitude={37.750808} longitude={122.437497} />
        <MapMarker latitude={25.783803} longitude={80.575245} />
        <MapMarker latitude={35.9904} longitude={-86.717054} />
        <MapMarker latitude={34.034801} longitude={-118.300794} />
        <MapMarker latitude={30.258472} longitude={-97.722509} />
        <MapMarker latitude={40.69702} longitude={-73.822849} />
        <MapMarker latitude={52.205758} longitude={0.11788} />
        {/* <MapMarker latitude={47.690421} longitude={-122.362419} />
        <MapMarker latitude={39.724782} longitude={-104.998261} />
        <MapMarker latitude={35.204773} longitude={-80.852195} />
        <MapMarker latitude={37.776682} longitude={-97.337532} />
        <MapMarker latitude={43.689671} longitude={-84.850088} />
        <MapMarker latitude={39.941218} longitude={-83.028524} />
        <MapMarker latitude={51.027657} longitude={-114.032475} /> */}
      </ReactMapGL>
    </StyledDiv>
  )
}

export default Map
