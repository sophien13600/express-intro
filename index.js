// import http from 'node:http'

//  const server = http.createServer((req, res) => {
//     res.end ("hello world!")
//  })
// import { createServer } from 'node:http' //destructuration

//expres js est un ensemble de middleware
//un middleware est une fonction qui prend 3 parametres
//middleware(req, res ,next) next permet d'appeler le middleware suivant




// app.post('/', (req, res) => {
  //   res.end('POST : /')
  // })
  
  // app.get('/personne', (req, res) => {
    //   res.end('GET : /personne')
    // })
    
    // app.get('/formation', (req, res) => {
      //   res.end('GET : /formation')
      // })
import express from 'express'
import 'dotenv/config'

const app = express()

const m1 = (req, res, next) => {
    console.log("Middleware : m1");
    next()
}

const m2 = (req, res, next) => {
    console.log("Middleware : m2");
    next()
}

const m3 = (req, res) => {
    console.log("Middleware : m3");
}

app.get('/', (req, res, next) => {
    console.log("GET : /")
    res.end("GET : /")
    next()
})
// }, [m2, m1])
// app.use(m1)


// app.use(m2)

app.use([m1, m3, m2])
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Adresse serveur : http://localhost:${PORT}`);
})
// app.use(m1)


// app.use(m2)
// const server = createServer((req, res) => {
//     res.end("Hello world!")
// })

// const PORT = process.env.PORT || 5000

//  server.listen(PORT, ()=>{
//     console.log(`adresse serveur : http://localhost:${PORT}`);
    
//  })