// A middleware function is a function which has these properties
/**
 * Changes any code
 * Changes request and response
 * Can end any request
 * Can call next middleware
 * Can throw & catch errors
 **/

const express = require('express')
const app = express()
// Simple Middleware
app.all('/mid',(req,res ,next)=>{
    console.log("I am a middleware...")
    res.send('Call from a middleware...')
    next() // if we put something on next then it is considered as an errror
})


// Error Handlng Middleware
app.all('/hand',(req,res ,next)=>{
    throw new Error('There was an error')
})

errhandler = (err,req,res,next)=>{
    console.log(err)
    res.status(500).send("There was a server side error")
}
app.use(errhandler)


// By Defoult express uses error handling middleware...
app.get('/deferr',(req,res)=>{
    console.log(a)
})
newhand = (err,req,res,next) =>{
    console.log(err)
    res.send('There was an Internal Server Error')
}
app.use(newhand)
app.listen(3000,()=>{
    console.log("Running on port 3000...")
})

/********************** End ***********************/