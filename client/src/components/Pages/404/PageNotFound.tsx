import { FC } from 'react'
import IMG1 from '../../../assets/images/404Ramen.svg'
import './PageNotFound.scss'
import { Link } from 'react-router-dom'

const PageNotFound: FC = () => {
  return (
    <div className="error404">
      <img className="bowl" src={IMG1} alt="errorImg" />
      <br></br>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <br></br>
      <p className="text">
        Uh-oh! Looks like the page you are trying to access, does not
        <br></br>
        exist. Please start afresh.
      </p>
      <br></br>
      <div className="homeBtn">
        <Link className="homeLink" to="/">
          <h3>Home</h3>
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
