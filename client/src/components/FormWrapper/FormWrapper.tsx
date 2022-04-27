import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/ramen.png'

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
          <img src={logo} alt="ramen" />
          Bon Appétit
        </h1>
      </Link>
      <h2>{title}</h2>
      <small>{subTitle}</small>
      {children}
    </div>
  )
}

export default FormWrapper
