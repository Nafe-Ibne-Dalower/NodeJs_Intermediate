// Including Express
const express = require('express')
const app = express()
// Serving Html Files
app.use(express.static('./static'))

app.use(express.json()) // Parses Content-Type application.json and returns an Object
app.use(express.raw()) // Parses Content-Type application/octet-stream and returns an Object
app.use(express.text()) // Parses Content-Type text/plain and returns an string
app.use(express.urlencoded()) // Parses Content-Type application/x-www-form-urlencoded and returns an string
// Sending Response
app.get('/',(req,res)=>{
    res.send('Server Started!!!')
})
app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('I am inserted by post method...')
})

// Creating Server
port = 3000
app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}/`)
})