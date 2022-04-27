import { NextFunction, Response } from 'express'
import { extractFormErrors } from './extractFormErrors'
/**
 * DATABASE CONNECTION HANDLER
 */
const returnFormErrors = (res: Response, next: NextFunction, error: any) => {
  if (error.name === 'ValidationError') {
    const formErrors = extractFormErrors(Object.values(error.errors))
    return res.status(400).json({ errors: formErrors })
  }
  return next(error)
}

export default returnFormErrors
