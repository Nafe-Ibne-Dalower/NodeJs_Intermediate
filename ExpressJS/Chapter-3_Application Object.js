// The app object conventionally denotes the Express application.

const express = require("express");
const app = express();

// Properties
// app.local
app.locals.title = "MyApp";
console.dir(app.locals.title);

// app.mount
const admin = express();
app.get("/", (req, res) => {
  res.send("bla bla");
  console.log(app.mountpath);
});

admin.get("/", (req, res) => {
  res.send("We are in Admin");
  console.log(admin.mountpath);
});

admin.get("/dashboard", (req, res) => {
  res.send("We are in Admin Dashboard");
});
app.use("/admin", admin);

// Method

// app.get and app.set
// Usage-01
app.get('/get',(req,res)=>{
  res.send('Get Request')
})

// Usage-02
console.log(app.get('title'))
app.set('title','mysite')
console.log(app.get('title'))

// app.all --- works for get,post,put etc.
app.all("/", (req, res) => {
  res.send("ALL");
});

// app.post
app.post('/', (req, res) => {
  res.send('POST request to homepage')
})

// app.post
app.put('/', (req, res) => {
  res.send('Put request to homepage')
})

port = 3000
app.listen(port,()=>{
  console.log(`Listening on http://localhost:${port}/`)
})
/**************** End of Part-01 ****************/