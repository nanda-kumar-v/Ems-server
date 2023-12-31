const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    
    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validator(value){
            if(!this.validator.isEmail(value)){
                throw Error ("Invalid Email")
            }
        }
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        minlength:10,
        maxlength:100
    },
    gender:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
})

const users = new mongoose.model("users",userSchema)
module.exports= users

