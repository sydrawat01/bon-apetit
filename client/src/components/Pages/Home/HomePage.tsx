import { FC } from 'react'
import Map from '../MapPage/MapPage'
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
      <Map />
    </>
  )
}

export default HomePage
