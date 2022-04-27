import { FC, Suspense, lazy } from 'react'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout/Layout'

import { API_URL } from './config'
import Spinner from './components/UI/Spinner'
import PrivateRoute from './components/Private/PrivateRoute'

const HomePage = lazy(() => import('./Pages/Home/HomePage'))
const Landing = lazy(() => import('./Pages/Landing/Landing'))
const Login = lazy(() => import('./Pages/Login/Login'))
const LogPage = lazy(() => import('./Pages/LogPage/LogPage'))
const Profile = lazy(() => import('./Pages/Profile/Profile'))
const Register = lazy(() => import('./Pages/Register/Register'))

import './styles/layout/layout.scss'
import './styles/main.scss'
// AXIOS API
axios.defaults.baseURL = `${API_URL}/api`
axios.defaults.headers.common = {
  'Content-Type': 'application/json',
  authorization: `Bearer ${localStorage.getItem('jwt')}`,
}

const queryClient = new QueryClient()
// CUSTOM ROUTES
const App: FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logs/:id" element={<LogPage />} />
              <Route
                path="/my-logs-map"
                element={
                  <PrivateRoute>
                    <HomePage />
                  </PrivateRoute>
                }
              />
              <Route path="/u/:userId" element={<Profile />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </Suspense>
  )
}

export default App
