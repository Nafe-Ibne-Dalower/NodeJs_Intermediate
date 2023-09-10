// Requiring Module
const path = require('path')
const os = require('os')

// Path Module
const myPath = 'D:/All Desktop File/Documents/Coding Playground/VS Code Playground/Node Js Intermidiate Level/Chapter-01 Global Object & Module System.js'
// paths backward slash should be replaced by '/'
console.log(path.basename(myPath)) // Filename Nam
console.log(path.dirname(myPath))  // Directory Nam
console.log(path.extname(myPath))  // Extension Name
console.log(path.parse(myPath))    // Returns an object

// Os Module
// Os Module gives information about operating system
console.log(os.platform()) // Platform Name
console.log(os.homedir()) // Home Directory
console.log(os.freemem()) // Free Memory
console.log(os.cpus()) // returns how many corse are used

/********************** End *********************/