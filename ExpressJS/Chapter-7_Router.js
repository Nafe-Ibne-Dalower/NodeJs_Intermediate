// Router
/**
 * router.all()
 * router.method()
 * rourer.param()
 * router.route()
 * router.use()
 */

const express = require('express')
const app = express()
const router1 = express.Router()
const router = express.Router()

// router.all
router1.all('*',(req,res)=>{
    console.log("I am All in One...")
    res.send("Hello")
})

app.use('/all',router1)

// // router.param
router.param('id',(req,res,next,id)=>{
    console.log(id)
    req.user = id == 1 ? 'admin' : 'anon'
    next()
})

router.get('/user/:id',(req,res,next)=>{
    res.send('Hello '+ req.user)
})

app.use('/user',router)

// // router.route()
router
      .route('/rot')
      .get((req,res)=>{
        res.send('I am get...')
      })
      .post((req,res)=>{
        res.send('I am post...')
      })
      .all((req,res)=>{
        req.send('I am all...')
      })
app.use(router)

// router.use
router.use('/useme',(req,res,next)=>{
    console.log("I am router.use")
    res.send('Ok...')
    next()
})

app.listen(3000,()=>{
    console.log('Listening on port 3000')
})
/********************* End *********************/