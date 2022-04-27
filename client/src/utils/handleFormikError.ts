import { FormikHelpers } from 'formik'
import { FormError } from '../models/Error'
import getAxiosError from './getAxiosError'

// HANDLER FOR FORMIK ERROR
function handleFormikErrors(error: unknown, action: FormikHelpers<any>) {
  const { errors } = getAxiosError(error)
  ;(errors as FormError[]).forEach(({ path, message }) => {
    action.setFieldError(path, message)
  })
}

export default handleFormikErrors
