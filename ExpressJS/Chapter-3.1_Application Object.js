const express = require('express')
const app = express()
const path = require('path')
// app.enable,app.disble and app.enabled,app.disbled
app.enable('case sensitive routing')
app.disable('case sensitive routing')
console.log(app.enabled('case sensitive routing'))
console.log(app.disabled('case sensitive routing'))

// app.param
app.param('id',(req,res,next,id)=>{
  const user = {
      UserId : id,
      UserName: 'Tom',
    UserCountry: 'Bangladesh',
  }
  req.userDetail = user
  next()
})
app.all('/user:id',(req,res)=>{
    console.log(req.userDetail)
  res.send('Welcome '+ req.userDetail.UserId)
})

// View Engine
app.set('view engine','ejs')
app.use(express.static('static'))
app.set('views',path.join(__dirname,'./views'))
app.get('/view',(req,res)=>{
  res.render('index')
})
app.listen(3000,()=>{
  console.log(`Listening on port http://localhost:3000/`)
})
/******************** End *******************/