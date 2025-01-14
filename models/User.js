const mongoose = require('mongoose')

const { Schema } = mongoose;

const UserSchema = new Schema({
    
    first_name:{
        type:String,
        required:true,
        unique:true
    },
    last_name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },

  });

  module.exports = mongoose.model('user',UserSchema)