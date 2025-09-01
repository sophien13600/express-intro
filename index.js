// import http from 'node:http'

//  const server = http.createServer((req, res) => {
//     res.end ("hello world!")
//  })
import { createServer } from 'node:http' //destructuration
import 'dotenv/config'

const server = createServer((req, res) => {
    res.end("Hello world!")
})

const PORT = process.env.PORT || 5000

 server.listen(PORT, ()=>{
    console.log(`adresse serveur : http://localhost:${PORT}`);
    
 })