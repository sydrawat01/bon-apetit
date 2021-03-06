import { FC, useState } from 'react'
import axios from 'axios'
import { Form, Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'

import { loginUser } from '../../services/users'
import getAxiosError from '../../utils/getAxiosError'

import InputField from '../../components/UI/InputField'
import FormWrapper from '../../components/FormWrapper/FormWrapper'

import { useQueryClient, useMutation } from 'react-query'

import './Login.scss'

/**
 * LOGIN FORM
 */
const Login: FC = () => {
  const queryClient = useQueryClient()
  const { mutateAsync } = useMutation(loginUser)
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()

  return (
    <FormWrapper title="Login">
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values, _action) => {
          setErrMsg('')
          mutateAsync(values, {
            onSuccess: async (data) => {
              const { user, jwt } = data

              if (user && jwt) {
                localStorage.setItem('jwt', jwt)
                axios.defaults.headers.common = {
                  'Content-Type': 'application/json',
                  authorization: `Bearer ${jwt}`,
                }
                await queryClient.invalidateQueries('me')
                navigate('/')
              }
            },
            onError: (error) => setErrMsg(getAxiosError(error).message),
          })
        }}
      >
        {({ isSubmitting, values: { username, password }, setFieldValue }) => {
          return (
            <Form>
              {!!errMsg && (
                <small className="topError">
                  {errMsg}
                  <button onClick={() => setErrMsg('')}>
                    <i className="fas fa-times"></i>
                  </button>
                </small>
              )}
              <InputField label="Username" name="username" />
              <InputField type="password" label="Password" name="password" />
              <div className="btn-group">
                <button
                  type="submit"
                  disabled={isSubmitting || !username || !password}
                >
                  Login
                </button>
              </div>
            </Form>
          )
        }}
      </Formik>
      <small>
        Do not have an account? <Link to="/register">Sign up</Link>
      </small>
    </FormWrapper>
  )
}

export default Login
