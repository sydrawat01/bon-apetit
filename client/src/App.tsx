import { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './components/Pages/Landing/Landing'
import HomePage from './components/Pages/Home/HomePage'
import ForgotPassword from './components/Pages/ForgotPassword/ForgotPassword'
import PageNotFound from './components/Pages/404/PageNotFound'

import './styles/layout/layout.scss'

const App: FC = () => {
  return (
    <BrowserRouter>
      <h1>{process.env.APP_TITLE}</h1>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/landing" component={Landing} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/404" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
