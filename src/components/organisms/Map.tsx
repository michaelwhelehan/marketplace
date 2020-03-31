import React, { FC, useState } from 'react'
import styled from 'styled-components'
import ReactMapGL from 'react-map-gl'
import MapMarker from '../atoms/MapMarker'

const TOKEN =
  'pk.eyJ1IjoibXdoZWxlaGFuIiwiYSI6ImNrODBpdm5vcTBndnczc211MGxmdzl6azYifQ.Q_qr9Jta1_VKX2YwlLAtng'

const StyledDiv = styled.div`
  height: calc(100vh - 64px - 56px - 2px);
`

const Map: FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 53.558572,
    longitude: 9.9278215,
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
        <MapMarker />
      </ReactMapGL>
    </StyledDiv>
  )
}

export default Map
