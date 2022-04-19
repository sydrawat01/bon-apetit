import { FC } from 'react'
import { Map } from 'react-map-gl'

import './styles/layout/layout.scss'

import Spinner from './components/UI/Spinner'

const App: FC = () => {
  return (
    <>
      <h1>{process.env.APP_TITLE}</h1>
      <Spinner />
      <Map
        initialViewState={{
          latitude: 37.8,
          longitude: -122.4,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
      />
    </>
  )
}

export default App
