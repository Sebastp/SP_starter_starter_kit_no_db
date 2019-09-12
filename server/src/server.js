import {} from 'dotenv/config'
import express from 'express'
import cors from 'cors'
import compression from 'compression'

import { createServer } from 'http'

import router from '~/core/router'



const {
  PORT = 8080
} = process.env



// Create express app
const app = express()



// Enable cors
app.use(cors())

// Enable GZIP compression
app.use(compression())




// Handle routes
app.use('/', router)



const httpServer = createServer(app)


// Start the server
httpServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
