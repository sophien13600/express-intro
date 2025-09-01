// import http from 'node:http'

//  const server = http.createServer((req, res) => {
//     res.end ("hello world!")
//  })
// import { createServer } from 'node:http' //destructuration

import  express  from 'express'
import 'dotenv/config'
const app = express()

app.get('/', (req, res) => {
  res.end('GET : /')
})

app.post('/', (req, res) => {
  res.end('POST : /')
})

app.get('/personne', (req, res) => {
  res.end('GET : /personne')
})

app.get('/formation', (req, res) => {
  res.end('GET : /formation')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

// const server = createServer((req, res) => {
//     res.end("Hello world!")
// })

// const PORT = process.env.PORT || 5000

//  server.listen(PORT, ()=>{
//     console.log(`adresse serveur : http://localhost:${PORT}`);
    
//  })