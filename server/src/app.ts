import express from 'express'

/**
 * HEADER MIDDLEWARES
 */
import morgan from 'morgan' // logger the requests and response
import helmet from 'helmet' // protects some headers from exposure
import cors from 'cors' // access to our server from external server - Cross Origin Resource Sharing Header

/**
 * MIDDLEWARES
 */

import errorHandler from './middlewares/errorHandler'
import notFound from './middlewares/notFound'

/**
 * ROUTES
 */
import usersRoutes from './routes/userRoutes'
import logRoutes from './routes/logRoutes'
import { PROD } from './constants'
import path from 'path'

const app = express()

/**
 * SWAGGER DOCUMENTATION(API DOCUMENTATION)
 */
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

/**
 * MIDDLEWARES
 */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(morgan('common'))
app.use(helmet({ contentSecurityPolicy: false }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

if (!PROD)
  app.use(
    cors({
      origin: 'http://localhost:3000',
    })
  )

/**
 * CUSTOM ROUTES
 */
app.use('/api/users', usersRoutes)
app.use('/api/logs', logRoutes)

if (PROD) {
  app.use(express.static('client/build'))
  app.use((_req, res, next) => {
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self' https://*.mapbox.com ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://api.mapbox.com 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
    )
    next()
  })
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'))
  })
}
/**
 * MIDDLEWARES
 */
app.use(notFound)
app.use(errorHandler)

export default app
