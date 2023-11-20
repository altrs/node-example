import express from 'express'
import { sentence, paragraph } from 'txtgen'
import fetch from 'node-fetch'

// Create an instance of an express application 
const app = express()

// Set the port the application will be running on
const port = process.env.PORT || 3001

// Set up a response for the root path of the application
app.get('/', (req, res) => {
  fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
  .then(response => response.json())
  .then(bulbasaur =>{
  res.send(bulbasaur.moves)
})
})

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}` )
})


