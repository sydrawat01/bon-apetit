import { FC } from 'react'
import { Map } from 'react-map-gl'

import './HomePage.scss'

const HomePage: FC = () => {
  const mapContainer: {
    width: number
    height: number
  } = {
    width: 600,
    height: 400,
  }

  const initialViewState: {
    latitude: number
    longitude: number
    zoom: number
  } = {
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
  }
  const mapUI = 'mapbox://styles/mapbox/streets-v9'
  return (
    <>
      <div className="map">
        <Map
          initialViewState={initialViewState}
          style={mapContainer}
          mapStyle={mapUI}
          mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
        />
      </div>
    </>
  )
}

export default HomePage
