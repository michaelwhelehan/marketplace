import React, { FC, useState } from 'react'

import ReactMapGL from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN =
  'pk.eyJ1IjoibXdoZWxlaGFuIiwiYSI6ImNrODBpdm5vcTBndnczc211MGxmdzl6azYifQ.Q_qr9Jta1_VKX2YwlLAtng'

const Map: FC = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 53.558572,
    longitude: 9.9278215,
    zoom: 10,
  })

  return (
    <ReactMapGL
      mapboxApiAccessToken={TOKEN}
      {...viewport}
      onViewportChange={setViewport}
    />
  )
}

export default Map
