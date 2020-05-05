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
    latitude: -34.022967,
    longitude: 18.450437,
    zoom: 10,
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
        <MapMarker latitude={-34.022967} longitude={18.450437} />
        <MapMarker latitude={-33.941599} longitude={18.472} />
        <MapMarker latitude={-33.971625} longitude={18.584878} />
        <MapMarker latitude={-34.097379} longitude={18.486344} />
        <MapMarker latitude={-33.973333} longitude={18.482224} />
        <MapMarker latitude={-34.015745} longitude={18.50351} />
      </ReactMapGL>
    </StyledDiv>
  )
}

export default Map
