// Creation of Node js
/*
Creator: Ryan Dahl 
It was created when Ryan Dall took 'Chrome V8 Engine' from the browser console. So there are some differences between NodeJs and JavaScript.
*/
console.log(global) // It is a subtitute of 'Window' object of Javascript.

// Node Js Applications are module based so we will firstly learn about mpdule system of NodeJs.
/*
1. Creating a file 'Mod.js'
2. module.exports
3. Using it in other File
4. Conclusion
*/

// Convension is to write the modules on top
const mod = require('./Chapter-01.1 mod')
mod.addnum(50,50)
console.log(mod.creator)
/********************* End *********************/