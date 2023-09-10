// HTTP: Communicates with the network
const http = require('http')
// Creating 1st Server
const server = http.createServer((req,res)=>{
    // createServer Creates a server
    if(req.url === '/'){
        res.write("Our Server is running");
        res.end();
    }
    else if(req.url === '/about'){
        res.write("About us");
        res.end();
    }
    else{
        res.write("404 Not Found");
        res.end();
    }

})
port1 = 3000
server.listen(port1)
console.log(`Listening on http://localhost:${port1}/`)

// Creating 2nd Server
const server1 = http.createServer((req,res)=>{
    res.write(req.url)
    res.end();
})
port2 = 4000
server1.listen(port2,()=>{
    console.log(`Listening on http://localhost:${port2}/`)
})


/************************** End **************************/