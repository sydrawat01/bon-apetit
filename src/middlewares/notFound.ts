import { NextFunction, Request, Response } from 'express'
/**
 * NOT FOUND MIDDLEWARE
 */
const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error) // forwards error to next middleware
}

export default notFound
