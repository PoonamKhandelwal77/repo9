const express=require('express')
const app=express()
const port=8800
const userRoute=require('../api/src/route/userRoute')
const cors=require('cors')
 
app.use(cors())

app.get('/',(req,res)=>{
    res.send("hello from poonam")
})

app.use('/user',userRoute)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
})