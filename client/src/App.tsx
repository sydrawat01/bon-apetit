import { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/layout/layout.scss'
import Landing from './components/Pages/Landing'
import HomePage from './components/Pages/HomePage'
import ForgotPassword from './components/Pages/ForgotPassword'
import PageNotFound from './components/Pages/PageNotFound'
import Spinner from './components/UI/Spinner'

const App: FC = () => {
  return (
    <BrowserRouter>
      <>
        <h1>{process.env.APP_TITLE}</h1>
        <Spinner />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/landing" component={Landing} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/404" component={PageNotFound} />
        </Switch>
      </>
    </BrowserRouter>
  )
}

export default App
