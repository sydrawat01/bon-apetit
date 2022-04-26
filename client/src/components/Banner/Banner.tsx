import { FC } from 'react'

import './Banner.scss'

const Banner: FC = () => {
  return (
    <div className="banner">
      <h1>
        Welcome to{' '}
        <span className="logo-text">
          bon-<span className="bonappetit">app-e</span>tit.
        </span>{' '}
      </h1>
      <p>Your favourite places to eat on a map!</p>
    </div>
  )
}

export default Banner
