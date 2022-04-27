import ReactMapGL from 'react-map-gl'
import { InteractiveMapProps } from 'react-map-gl/src/components/interactive-map'
/**
 * TYPE DEFINITION FOR LOCATION STATE
 */
type LocationState = {
  latitude: number
  longitude: number
  zoom: number
}
/**
 * TYPE DEFINITIONS FOR DIMENSIONS OF MAP
 */
type Dimension = {
  width: string
  height: string
}
/**
 * TYPE DEFINITIONS FOR THE MAP WRAPPER PROPS
 */
type MapWrapperProps = InteractiveMapProps & {
  locationState: {
    location: LocationState
    setLocation: React.Dispatch<React.SetStateAction<LocationState>>
  }
  viewportState: {
    viewport: Dimension
  }
}
/**
 * MAP WRAPPER AND MAP-BOX API INTEGRATION
 */
const MapWrapper: React.FC<MapWrapperProps> = ({
  locationState,
  viewportState,
  children,
  ...props
}) => {
  const { location, setLocation } = locationState
  const {
    viewport: { width, height },
  } = viewportState

  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        overflowY: 'auto',
      }}
    >
      <ReactMapGL
        {...location}
        width="100%"
        height="100%"
        mapStyle={process.env.MAPBOX_MAP_STYLE}
        mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
        onViewportChange={(nextViewport: any) => setLocation(nextViewport)}
        {...props}
      >
        {children}
      </ReactMapGL>
    </div>
  )
}

export default MapWrapper
