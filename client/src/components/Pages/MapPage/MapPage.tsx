import React, { useEffect, useRef, useState } from 'react'
import { MapEvent, Marker, Popup } from 'react-map-gl'
import classNames from 'classnames'
import useMedia from 'use-media'
import useFetchMyLogs from '../../hooks/queries/useFetchMyLogs'
import Spinner from '../../UI/Spinner'
import MarkerPin from '../../Marker/Marker'
import MapWrapper from '../../MapWrapper/MapWrapper'
import AddLogEntry from '../../AddLogEntry/AddLogEntry'
import './MapPage.scss'
import { freezeMapSettings } from '../../utils/freezeMapSettings'

type Location = {
  longitude: number
  latitude: number
}

const scrollToBottom = () => {
  window.scrollTo(0, document.body.scrollHeight)
}

const MapPage = () => {
  const [showPopup, setShowPopup] = useState<Record<string, boolean>>({})
  const [newLocation, setNewLocation] = useState<Location | null>(null)
  const [confirmLoc, setConfirmLoc] = useState<Location | null>(null)
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
  })

  const [location, setLocation] = useState({
    latitude: 42.3398106,
    longitude: -71.0913604,
    zoom: 13,
  })

  const isTab = useMedia({ maxWidth: '643px' })

  const addNewLocation = (event: MapEvent) => {
    setConfirmLoc(null)
    const [longitude, latitude] = event.lngLat
    setShowPopup({})
    setNewLocation({
      latitude,
      longitude,
    })
    setLocation({ ...location, latitude, longitude })
  }

  // if (isLoading) {
  //   return <Spinner />
  // }
  return (
    <>
      <MapWrapper
        viewportState={{ viewport }}
        locationState={{ location, setLocation }}
        onDblClick={(e) => {
          e.stopImmediatePropagation()
          if (!confirmLoc) {
            addNewLocation(e)
          }
        }}
        // Freeze map after confirming the location
        {...(confirmLoc && freezeMapSettings)}
      >
        {newLocation && (
          <>
            <Marker
              key={JSON.stringify(newLocation)}
              latitude={newLocation.latitude!}
              longitude={newLocation.longitude!}
            >
              <div>
                <MarkerPin markerSize={location.zoom} />
              </div>
            </Marker>
            <Popup
              key={JSON.stringify(newLocation) + Math.random() * 100}
              latitude={newLocation.latitude!}
              longitude={newLocation.longitude!}
              closeButton={true}
              closeOnClick={false}
              onClose={() => {
                setNewLocation(null)
                if (confirmLoc) {
                  setConfirmLoc(null)
                }
              }}
              dynamicPosition={true}
              anchor="top"
            >
              <div className="popup">
                {!confirmLoc && <h3>Confirm Location</h3>}
                <ul className="new-location-wrapper">
                  <li>
                    <strong>Latitude: </strong>{' '}
                    {Number(newLocation.latitude).toFixed(2)}
                  </li>
                  <li>
                    <strong>Longitude: </strong>{' '}
                    {Number(newLocation.longitude).toFixed(2)}
                  </li>
                </ul>
                <button
                  onClick={() => {
                    setConfirmLoc(newLocation)
                    setLocation({
                      ...location,
                      longitude: newLocation.longitude,
                      latitude: newLocation.latitude,
                    })
                    if (isTab) {
                      setTimeout(() => {
                        scrollToBottom()
                      }, 500)
                    }
                  }}
                  disabled={!!confirmLoc}
                >
                  {confirmLoc ? 'Location selected' : 'Select location'}
                </button>
              </div>
            </Popup>
          </>
        )}
        {confirmLoc && !isTab && newLocation && (
          <div className="add-log-wrapper">
            <div className="add-log-header">
              <h2>Add Log</h2>
              <i
                onClick={() => setConfirmLoc(null)}
                className="fas fa-times"
              ></i>
            </div>
            <AddLogEntry location={confirmLoc} />
          </div>
        )}
      </MapWrapper>
      {confirmLoc && isTab && newLocation && (
        <div className={classNames('add-log-wrapper', { 'tab-view': isTab })}>
          <div
            className="bottom-nav"
            onClick={() => {
              scrollToBottom()
            }}
          ></div>
          <div className="add-log-header">
            <h2>Add Log</h2>
            <i onClick={() => setConfirmLoc(null)} className="fas fa-times"></i>
          </div>
          <AddLogEntry location={confirmLoc} />
        </div>
      )}
    </>
  )
}

export default MapPage
