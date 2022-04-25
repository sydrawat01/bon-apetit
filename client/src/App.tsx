import { FC, Suspense, lazy } from 'react'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { API_URL } from './config'
import Spinner from './components/UI/Spinner'

const Landing = lazy(() => import('./components/Pages/Landing/Landing'))
const HomePage = lazy(() => import('./components/Pages/Home/HomePage'))
const ForgotPassword = lazy(
  () => import('./components/Pages/ForgotPassword/ForgotPassword')
)
const PageNotFound = lazy(() => import('./components/Pages/404/PageNotFound'))

import './styles/layout/layout.scss'
import './styles/main.scss'

axios.defaults.baseURL = `${API_URL}/api`
axios.defaults.headers.common = {
  'Content-Type': 'application/json',
  authorization: `Bearer ${localStorage.getItem('jwt')}`,
}

const queryClient = new QueryClient()

const App: FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Suspense>
  )
}

export default App
