import { FC, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'

type LayoutProps = {
  children?: ReactNode
}
/**
 * LAYOUT
 */
const Layout: FC<LayoutProps> = ({ children }) => {
  const location = useLocation()
  return (
    <div>
      {!['/login', '/register'].includes(location.pathname) && <Header />}
      {location.pathname === '/' && <Banner />}
      {children}
    </div>
  )
}

export default Layout
