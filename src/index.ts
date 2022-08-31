import 'colors'
import 'dotenv/config'

import app from './app'
import connectDB from './connect-db'

/**
 * CONNECTION TO DATABASE
 */
connectDB()
/**
 * PORT NUMBER
 */
const PORT = process.env.PORT || 1337
/**
 * LISTENING PORT
 */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`.blue.bold)
})
