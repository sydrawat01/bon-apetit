import { FC } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'

import './HomePage.scss'

import { mapContainer, initialViewState } from '../../../models/map'

const HomePage: FC = () => {
  const mapContainer: mapContainer = {
    width: '100vw',
    height: '100vh',
  }

  const initialViewState: initialViewState = {
    latitude: 42.3398106,
    longitude: -71.0913604,
    zoom: 13,
  }

  const mapUI = 'mapbox://styles/sydrawat01/cl28jhv9u004c14nwbveq4wqp'
  return (
    <>
      <div className="map">
        <ReactMapGL
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
