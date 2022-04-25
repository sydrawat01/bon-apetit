import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Landing from './components/Pages/Landing/Landing'
import HomePage from './components/Pages/Home/HomePage'
import ForgotPassword from './components/Pages/ForgotPassword/ForgotPassword'
import PageNotFound from './components/Pages/404/PageNotFound'

import './styles/layout/layout.scss'
import './styles/main.scss'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/404" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
