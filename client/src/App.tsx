import { FC } from 'react'

import './styles/layout/layout.scss'

import Spinner from './components/UI/Spinner'

const App: FC = () => {
  return (
    <>
      <h1>{process.env.APP_TITLE}</h1>
      <Spinner />
    </>
  )
}

export default App
