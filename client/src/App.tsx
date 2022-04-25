import { FC, Suspense, lazy } from 'react'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { API_URL } from './config'
import Spinner from './components/UI/Spinner'

const PageNotFound = lazy(() => import('./Pages/404/PageNotFound'))
const HomePage = lazy(() => import('./Pages/Home/HomePage'))
const Landing = lazy(() => import('./Pages/Landing/Landing'))
const Login = lazy(() => import('./Pages/Login/Login'))
const LogPage = lazy(() => import('./Pages/LogPage/LogPage'))
const Profile = lazy(() => import('./Pages/Profile/Profile'))
const Register = lazy(() => import('./Pages/Register/Register'))

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
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logs:/id" element={<LogPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/u/:userId" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Suspense>
  )
}

export default App
