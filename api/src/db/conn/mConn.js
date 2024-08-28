const mongoose=require('mongoose')

const conn=mongoose.connect('mongodb+srv://poonam:1234@cluster0.z1dln.mongodb.net/Sshopee').then(()=>{
    console.log("database connected");
}).catch((e)=>{
    console.log("the error is :========================="+e);
})

module.exports=conn