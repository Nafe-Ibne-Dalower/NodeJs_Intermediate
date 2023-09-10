// Fs is Shortform of Filesystem
const fs = require('fs')

/*
Common use for the File System module
1. Read files
2. Create files
3. Update files
4. Delete files
5. Rename files 
*/

// Commands
/*
fs.open()
fs.writeFile()
fs.appendFile()
fs.readFile()
*/
// Requirment Concept
// Callback Function: data & err two parameters. If data is present then err is null and if Data isn't present then err is null.

fs.open('demoOpen.txt', 'w', (err,file) => { // Here 'w' is writing mode...
    if(err) throw err;
    console.log('File Created Successfully')
})

// Opening and writing symaltaneously

fs.writeFile('WriteFile.txt', ' File Created by writefilenbcnmdffrb', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    console.log()
})

fs.writeFileSync('WriteFile.txt', 'File Created by Writefile.', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    console.log()
})


// Appending
fs.appendFileSync('WriteFile.txt', ' Now we are using appending', (err) => {
    if (err) throw err;
  });


  
// Reading
// fs.readFile('WriteFile.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString()); // If we don't use toString() then it will return a buffer
//   });
fs.readFile('WriteFile.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString()); // If we don't use toString() then it will return a buffer
  });

fs.readFile('WriteFile.txt','utf8', (err, data) => {
    if (err) throw err;
    console.log(data); // Or We can use utf8
  });

/****************** End ******************/