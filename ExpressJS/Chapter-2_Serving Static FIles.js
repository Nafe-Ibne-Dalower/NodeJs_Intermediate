const express = require('express')
const app = express()

app.use(express.static('static'))
app.listen(3000)

// app.get('/',(req,res)=>{
//     res.sendFile()
// })