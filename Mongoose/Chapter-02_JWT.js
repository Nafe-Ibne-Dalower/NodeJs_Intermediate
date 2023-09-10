const express = require("express");
const app = express();
app.use(express.json())
const mongoose = require("mongoose");
const userHandler = require('./handler/userHandler')
const checkLogin = require('./middlewares/checkLogin')

mongoose
  .connect("mongodb://127.0.0.1:27017/mongoexpress")
  .then(() => console.log("Successfully Connected..."))
  .catch((err) => console.log(err));

  app.use('/',userHandler)
  app.get('/secret',checkLogin,(req,res)=>{
    res.send('Secret Zone...')
  })
// Endpoints
app.listen(3000)
