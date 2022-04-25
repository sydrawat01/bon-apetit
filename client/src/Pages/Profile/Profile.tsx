import { FC } from 'react'
import { useParams } from 'react-router-dom'

import './Profile.scss'

const Profile: FC = () => {
  const params: any = useParams()
  const userId: string = params.userId

  return (
    <div className="container">
      <pre>userId: {userId}</pre>
    </div>
  )
}

export default Profile
