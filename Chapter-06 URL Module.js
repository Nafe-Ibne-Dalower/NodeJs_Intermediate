const http = require('http')
const url = require('url')
// The URL module splits up a web address into readable parts.
// Using URL
const server2 = http.createServer((req,res)=>{
    res.write('Running...')
    res.end();
    parsedUrl = url.parse(req.url , true)
    path = parsedUrl.pathname
    console.log(`Path: ${path}`)
})
port = 3000
server2.listen(port,()=>{
    console.log(`Listening on http://localhost:${port}/`)
})