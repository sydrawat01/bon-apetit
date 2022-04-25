import { FC } from 'react'
import Lottie from 'lottie-react'
import ramen from '../../assets/animations/ramen.json'

import './Spinner.scss'

const Spinner: FC = () => {
  const style = {
    // margin: '0 auto',
    width: '200px',
    height: '200px',
  }
  return (
    <div className="spinner">
      <Lottie animationData={ramen} loop autoPlay style={style} />
    </div>
  )
}

export default Spinner
