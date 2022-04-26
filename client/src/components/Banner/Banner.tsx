import { FC } from 'react'

import './Banner.scss'

const Banner: FC = () => {
  return (
    <div className="banner">
      <h1>
        Welcome to{' '}
        <span className="logo-text">
          bon<span style={{ color: '#69060b' }}>app-e</span>tit.
        </span>{' '}
      </h1>
      <p>Share your journey with us !</p>
    </div>
  )
}

export default Banner
