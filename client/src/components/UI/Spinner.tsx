import { FC } from 'react'
import Lottie from 'lottie-react'
import ramen from '../../assets/animations/ramen.json'

const Spinner: FC = () => {
  const style = {
    margin: '0 auto',
    width: '200px',
    height: '200px',
  }
  return <Lottie animationData={ramen} loop autoPlay style={style} />
}

export default Spinner
