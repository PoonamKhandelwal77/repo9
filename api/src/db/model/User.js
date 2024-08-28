const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
    contact:String,
    emailid: String,
    gender:String,
    password:String,
    cPassword:String
})

const userModel=new mongoose.model("User",userSchema)

module.exports=userModel
