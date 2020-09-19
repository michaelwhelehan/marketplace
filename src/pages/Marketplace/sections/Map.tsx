import React, { FC, useState } from 'react'
import styled from 'styled-components'
import ReactMapGL from 'react-map-gl'
import MapMarker from '../../../uiComponents/atoms/MapMarker'

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
      </ReactMapGL>
    </StyledDiv>
  )
}

export default Map
