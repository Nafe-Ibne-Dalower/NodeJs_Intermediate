const mongoose = require('mongoose')

userSchema = mongoose.Schema({
    Username:{
        type: String,
        required: true,
    },
    Password:{
        type:String,
        required:true,
    }
})

module.exports = userSchema