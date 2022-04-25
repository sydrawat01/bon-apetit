const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

/**
 * ROUTES
 */
const logs = require('./routes/logEntry')
const authRoutes = require('./routes/auth')
const middlewares = require('./middlewares')

const app = express()

/**
 * DATABASE CONNECTION
 */
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB IS CONNECTED')
  })

/**
 * MIDDLEWARES
 */
app.use(morgan('common'))
app.use(helmet())
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
)
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  })
})

/**
 * ROUTES
 */
app.use('/api', logs)
app.use('/api', authRoutes)

/**
 * MIDDLEWARES
 */
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

/**
 * PORT
 */
const port = process.env.PORT || 1337
/**
 * STARTING A SERVER
 */
app.listen(port, () => {
  console.log('Listening at http://localhost:1337')
})
