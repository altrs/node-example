import express from 'express'
import { sentence, paragraph } from 'txtgen'

// Create an instance of an express application 
const app = express()

// Set the port the application will be running on
const port = process.env.PORT || 3001

// Set up a response for the root path of the application
app.get('/', (req, res) => {
  res.send(paragraph([20]))
})

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}` )
})
