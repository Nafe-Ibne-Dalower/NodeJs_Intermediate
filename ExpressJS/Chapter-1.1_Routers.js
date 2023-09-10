// Including Express
const express = require('express')
const app = express()
const router = express.Router()
app.use(router)
// Sending Response
router.get('/',(req,res)=>{
    res.send('Server Started!!!')
})
router.get('/home',(req,res)=>{
    res.send('Server Started!!!')
})
router.post('/',(req,res)=>{
    console.log(req.body)
    res.send('I am inserted by post method...')
})

// Creating Server
port = 3000
app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}/`)
})