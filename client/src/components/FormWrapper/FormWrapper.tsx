import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import './FormWrapper.scss'

type FormWrapperProps = {
  title: string
  subTitle?: string
  children?: ReactNode
}

const FormWrapper: FC<FormWrapperProps> = ({ title, subTitle, children }) => {
  return (
    <div className="form-wrapper">
      <Link className="logo" to="/">
        <h1>
          <i className="fas fa-map-marked-alt"></i>
          bon-<span className="bonappetit">app-e</span>tit.
        </h1>
      </Link>
      <h2>{title}</h2>
      <small>{subTitle}</small>
      {children}
    </div>
  )
}

export default FormWrapper
