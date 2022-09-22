const mongoose = require('mongoose')

const SignUpTemplate = new mongoose.Schema({

    userName: {
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    passWord: {
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('mytable', SignUpTemplate)