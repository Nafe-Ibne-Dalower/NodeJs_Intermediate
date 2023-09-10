const express = require('express')
const mongoose = require('mongoose')
const app = express()
const reqreshandler = require('./handler/reqreshandler')
app.use(express.json())

// connecting with database
mongoose.connect('mongodb://127.0.0.1:27017/mongoexpress')
        .then(()=>console.log('Successfully Connected...'))
        .catch(err => console.log(err))

// App Routes
app.use('/',reqreshandler)
// creating a server
app.listen(3000,()=>{
    console.log('Listening on port 3000')
})