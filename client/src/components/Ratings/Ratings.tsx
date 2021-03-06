import { FC } from 'react'
import cn from 'classnames'
import './Ratings.scss'
/**
 * DEFINITIONS FOR RATING
 */
type RatingProps = {
  color?: 'green' | 'orange'
  rating: number
  max?: number
}
/**
 * RATING
 */
const Rating: FC<RatingProps> = ({ color = 'green', rating }) => {
  return (
    <div className="rating" style={{ color }}>
      {[1, 2, 3, 4, 5].map((v) => (
        <i
          key={Math.random() * 100 * v}
          className={cn('fa-2x', {
            'fas fa-star': rating >= v,
            'far fa-star': rating < v,
          })}
        ></i>
      ))}
    </div>
  )
}

export default Rating
