import React, { FC, useState } from 'react'

import ReactMapGL from 'react-map-gl'

import MapMarker from '../atoms/MapMarker'

const TOKEN =
  'pk.eyJ1IjoibXdoZWxlaGFuIiwiYSI6ImNrODBpdm5vcTBndnczc211MGxmdzl6azYifQ.Q_qr9Jta1_VKX2YwlLAtng'

const Map: FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 53.558572,
    longitude: 9.9278215,
    zoom: 10,
  })

  return (
    <ReactMapGL
      mapboxApiAccessToken={TOKEN}
      width="100%"
      height="100%"
      {...viewport}
      onViewportChange={setViewport}
    >
      <MapMarker />
    </ReactMapGL>
  )
}

export default Map
