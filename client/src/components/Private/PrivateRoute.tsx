import { FC, ReactNode } from 'react'
import { useQuery } from 'react-query'
import { Navigate } from 'react-router-dom'
import Spinner from '../UI/Spinner'
import { loadUser } from '../../services/users'

/**
 * DEFINITIONS FOR PRIVATE ROUTES
 */
type PrivateRouteType = {
  children?: ReactNode
}

const PrivateRoute: FC<PrivateRouteType> = ({ children }) => {
  const { data, isLoading } = useQuery('me', loadUser)

  if (isLoading) return <Spinner />

  return data && data.user ? <>{children}</> : <Navigate to="/login" />
}

export default PrivateRoute
