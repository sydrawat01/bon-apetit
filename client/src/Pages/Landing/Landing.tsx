import { FC } from 'react'

import Spinner from '../../components/UI/Spinner'
import Ratings from '../../components/Ratings/Ratings'

import { Link } from 'react-router-dom'
import useFetchAllLogs from '../../hooks/queries/useFetchAllLogs'

import './Landing.scss'

const Landing: FC = () => {
  const { data, isLoading } = useFetchAllLogs()

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="container public-logs-container">
      <h1 className="head-title">Browse Logs</h1>
      <p className="brief">
        Explore curated lists of reviews of top places in Boston
      </p>
      <section className="logs-list">
        {data && data.length > 0 ? (
          data.map((entry) => (
            <article className="log-article" key={entry._id}>
              <Link to={`/logs/${entry._id}`}>
                <h2>{entry.title}</h2>
              </Link>
              <blockquote className="flex-2">
                <i className="fas fa-quote-left"></i>{' '}
                <span>
                  {entry.comments ? entry.comments : <small>No comments</small>}
                </span>
              </blockquote>
              <p className="desc">
                <span>
                  {entry.description ? (
                    entry.description
                  ) : (
                    <small>No description</small>
                  )}
                </span>
              </p>
              <Ratings rating={entry.rating} />
            </article>
          ))
        ) : (
          <div className="card no-log-wrapper">
            <p>No logs yet made public</p>
            <Link to="/my-logs-map">Add new log</Link>
          </div>
        )}
      </section>
    </div>
  )
}

export default Landing
