const express=require('express')
const app=express()
const port=8800



app.get('/',(req,res)=>{
    res.send("hello from poonam")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
})