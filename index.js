import express from 'express'
import { sentence, paragraph } from 'txtgen'
import fetch from 'node-fetch'
import funnyExcuse from 'funny-excuse'

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const app = express()
const port = process.env.PORT || 3001

const movieQuote = require("popular-movie-quotes");
//console.log(movieQuote.getRandomQuote());

app.get('/', (req, res) => {
  res.send(`A really great movie quote: <u>${movieQuote.getRandomQuote()}</u>`)
})

// app.get('/', (req, res) => {
//   fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
//   .then(response => response.json())
//   .then(bulbasaur =>{
//   res.send(bulbasaur.moves)
//   })
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


