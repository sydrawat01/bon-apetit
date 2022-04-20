import { FC } from 'react'
import { Map } from 'react-map-gl'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './components/Pages/Landing'
import HomePage from './components/Pages/HomePage'
import ForgotPassword from './components/Pages/ForgotPassword'
import PageNotFound from './components/Pages/PageNotFound'
import Spinner from './components/UI/Spinner'

import './styles/layout/layout.scss'

const App: FC = () => {
  return (
    <BrowserRouter>
      <h1>{process.env.APP_TITLE}</h1>
      <Spinner />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/landing" component={Landing} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/404" component={PageNotFound} />
      </Switch>
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
    </BrowserRouter>
  )
}

export default App
