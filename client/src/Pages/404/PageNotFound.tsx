import { FC } from 'react'
import IMG1 from '../../assets/images/404Ramen.svg'
import './PageNotFound.scss'
import { Link } from 'react-router-dom'
/**
 *
 * PAGE NOT FOUND
 */
const PageNotFound: FC = () => {
  return (
    <div className="error404">
      <div className="img">
        <img className="bowl" src={IMG1} alt="errorImg" />
      </div>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p className="text">
        Uh-oh! Looks like the page you are trying to access, does not
      </p>
      <p className="textA">exist. Please start afresh.</p>
      <button className="homeBtn">
        <Link className="homeLink" to="/">
          <h3>Home</h3>
        </Link>
      </button>
    </div>
  )
}

export default PageNotFound
