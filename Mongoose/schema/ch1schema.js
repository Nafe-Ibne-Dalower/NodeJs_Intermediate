const mongoose = require('mongoose')
const ch1schema = mongoose.Schema({
    name:{
        type : String,
        required:true,
    },
    status:{
        type: String,
        enum: ['active','inactive']
    }
})

module.exports = ch1schema