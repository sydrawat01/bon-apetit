import { FC } from 'react'

import './Banner.scss'

const Banner: FC = () => {
  return (
    <div className="banner">
      <h1>
        Welcome to{' '}
        <span className="logo-text">
          trave<span style={{ color: 'yellow' }}>l-l</span>ogs.
        </span>{' '}
      </h1>
      <p>Share your journey with us !</p>
    </div>
  )
}

export default Banner
