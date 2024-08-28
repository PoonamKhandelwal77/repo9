const mongoose=require('mongoose')

const conn=mongoose.connect('mongodb://127.0.0.1:27017/MyDB').then(()=>{
    console.log("database connected");
}).catch((e)=>{
    console.log("the error is :========================="+e);
})

module.exports=conn