const express = require('express')
const app = express()
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
        destination: (req,file,cb)=>{
            cb(null,'./upload/');
        },
        filename: (req,file,cb)=>{
            const filext = path.extname(file.originalname)
            const filename = file.originalname 
                                 .replace(filext, "")
                                 .toLowerCase()
                                 .split(" ")
                                 .join("-") + "-"+ Date.now()
            cb(null,filename + filext)
        }
    })

const upload = multer({
    // dest: './upload/',
    storage : storage,
    // limits: 10000000,
    fileFilter: (req,file,cb)=>{
        console.log(file)
        if(file.fieldname==='avatar'){
            if(
            file.mimetype === 'image/png'||
            file.mimetype === 'image/jpg' ||
            file.mimetype === 'image/jpeg'
            ) {
                cb(null,true)
            }else{
                cb(new Error('Only can sent png jpg or jpeg...'))
            }
        }
        if(file.fieldname==='doc'){
            if(
            file.mimetype === 'application/pdf'
            ) {
                cb(null,true)
            }else{
                cb(new Error('Only can sent PDF...'))
            }
        }

    }
    

})

// Main
// app.post('/',upload.single('avatar'),(req,res)=>{
//     res.send('Form Sent')

// })
app.post('/',upload.fields([
    {name: 'avatar', maxCount: 5},
    {name: 'doc', maxCount: 5},
]),(req,res)=>{
    res.send('Form Sent')})

// Error Handler
app.use((err,req,res,next)=>{
    if(err){
        if(err instanceof multer.MulterError){
            res.status(500).send('There was an upload error...')
        }else{
            res.send(err.message)
        }
    }else{
        res.send('Success...')
    }
})

// Uploading Multiple File
// app.post('/',upload.array('avatar',5),(req,res)=>{
//     res.send('Form Sent')
// })

// Multiple Field
// app.post('/',upload.fields([
//     {name: 'avatar', maxCount: 5},
//     {name: 'doc', maxCount: 5},
// ]),(req,res)=>{
//     res.send('Form Sent')})

// Form Data
// app.post('/',upload.none(),(req,res)=>{
//     res.send('Form Sent')
// })


app.listen(3000,()=>{
    console.log("listening on port 3000")
})
