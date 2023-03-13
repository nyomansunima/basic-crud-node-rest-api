const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const { config } = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes')
const { connectDatabase } = require('./utils/database')

/**
 * bootstrap all deps
 * and your app here
 */
async function bootstrap() {
  config()
  await connectDatabase()
  const app = express()

  // add the middleware and
  // plugins
  app.use(helmet())
  app.use(morgan('combined'))
  app.use(cors({ origin: '*' }))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // all you route in one place
  app.use('/api/', router)

  // add the base response
  app.use('/', (req, res) => {
    res.send('Welcome in CRUD API')
  })

  // running the application
  // on specify port
  const PORT = process.env.PORT || 4000
  app.listen(PORT, () => {
    console.log(`Application running on http://localhost:${PORT}`)
  })
}

// run the application
bootstrap()
