const express = require('express')
const app = express()
const admin = express()
app.use(express.json())

// Properties
// req.baseUrl
app.get('/',(req,res)=>{
    res.send("We are in app...")
    console.log(req.baseUrl) // Same to mountpath
    console.log(req.originalUrl) // Same to mountpath
    console.log(req.url) // Node Core Url
})
app.get('/dashboardapp',(req,res)=>{
    res.send("We are in app...")
    console.log(req.baseUrl) // Same to mountpath
    console.log(req.originalUrl) // Same to mountpath
    console.log(req.url) // Node Core Url
})

admin.get('/dashboard',(req,res)=>{
    res.send('We are in admin dashboard...')
    console.log(req.baseUrl) // Same to mountpath
    console.log(req.originalUrl) // Same to mountpath
    console.log(req.url) // Node Core Url
})

app.use('/admin',admin)

// req.path
app.all('/newpath',(req,res)=>{
    console.log(req.path)
    res.send("By Path...")
})

// req.route
app.all('/newroute',(req,res)=>{
    console.log(req.route)
    res.send("Routing...")
})

// req.hostname
app.all('/newhost',(req,res)=>{
    console.log(req.hostname)
    res.send("Knowiing Hostname...")
})

// req.hostname
app.all('/newip',(req,res)=>{
    console.log(req.ip)
    res.send("IP...")
})

// req.method
app.all('/methodget',(req,res)=>{
    console.log(req.method) // returns Capital Letter
    res.send("Method...")
})

// req.protocol -- http or https
app.all('/protocol',(req,res)=>{
    console.log(req.protocol) // returns Capital Letter
    res.send("Protocol...")
})

// req.params
app.all('/user:id',(req,res)=>{
    res.send('Here is your id: ' + req.params.id)
    console.log(req.params)
})

// req.queries
app.all('/usequery',(req,res)=>{
    res.send(req.query)
    console.log(req.query)
})

// req.body
app.all('/body',(req,res)=>{
    res.send(req.body)
    console.log(req.body)
    // req.accept --- Checks the request is acceptable or not
    console.log(req.accepts('html'))
    console.log(req.accepts('png'))
})
port = 3000
app.listen(port,()=>{
    console.log(`Listening on port http://localhost:${port}/`)
})
/****************************** End *******************************/