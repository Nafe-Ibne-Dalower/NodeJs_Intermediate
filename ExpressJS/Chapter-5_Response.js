const express = require('express')
const app = express()
// The res object represents the HTTP response that an Express app sends when it gets an HTTP request.
// Properties...
// res.headersSent
app.get('/header',(req,res)=>{
    console.log(res.headersSent)
    res.send('Ok')
    console.log(res.headersSent)
})
// res.local
app.set('view engine','ejs')
app.get('/local',(req,res)=>{
    res.render('local',{ // render 
        name:'Jimam',
    })
})

// Methods
// Attachment
app.get('/attc',(req,res)=>{
    res.attachment('./static/assets/img/Logo.png')
    res.end() // res.end
})

// Cookie
app.get('/cook',(req,res)=>{
    res.cookie('Name','AtomenCrypt')
    // res.clearCookie('Name','AtomenCrypt')// Clear Cookie
    res.end() // res.end
})

// Json
app.get('/json',(req,res)=>{
    res.cookie('Name_JSON','Nafe')
    // res.clearCookie('Name_JSON','Nafe')// Clear Cookie
    res.end() // res.end
})

// res.status
app.get('/status',(req,res)=>{
    res.status = 400
    res.sendStatus(400)
    res.end()
})

// res.format
app.get('/format',(req,res)=>{
    res.format({
        text: ()=>{
          res.send('Plane Text')
        },
      
        html: ()=>{
          res.send('<p>HTML</p>')
        },
      
        json: ()=>{
          res.send({ AppJson: 'Apppl/JSON' })
        },
        default: ()=>{
            res.send('Denied')
        }
      })
})
app.listen(3000,()=>{
    console.log(`Server running on http://localhost:3000/`)
})

/********************* End *********************/