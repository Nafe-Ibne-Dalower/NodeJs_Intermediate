// Install Express via 'npm i express' command

// Including Express
const express = require('express')
const app = express()

// Sending Response
app.get('/',(req,res)=>{
    res.send('Server Started!!!')
})
app.get('/about',(req,res)=>{
    res.send('About')
})

// Creating Server
port = 3000
app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}/`)
})
/********************* End *********************/