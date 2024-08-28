require('../db/conn/mConn')
const userModel=require("../db/model/User")

const getAllUsers=async(req,res)=>{
    try {
         const users=await userModel.find()
         console.log(users);
         
 res.status(200).send(users)
    } catch (error) {
         res.send(error)
    }
}
const getUserById=async(req,res)=>{
    try {
         const _id=req.params.id
         const users=await userModel.findById(_id)
         res.status(200).send(users)
    } catch (error) {
         res.send(error)
    }
}
const getUserByName=async(req,res)=>{
    try {
         const _id=req.params.nm
         const users=await userModel.findOne({name:_id})
         res.status(200).send(users)
    } catch (error) {
         res.send(error)
    }
}

const updateUser=async(req,res)=>{
    try {
         const _id=req.params.id
          const updatedUser=req.body
         const upUser=await userModel.findByIdAndUpdate(_id,updatedUser)
         res.status(201).send(upUser)
    } catch (error) {
         res.send(error)
    }
}
const deleteUser=async(req,res)=>{
    try {
         const _id=req.params.id
         // const updatedUser=req.body
    
         const delUser=await userModel.findByIdAndDelete(_id)
         res.status(200).send(delUser)
    } catch (error) {
         res.send(error)
    }
}

const createUser=async(req,res)=>{
    try {
         const newUser=req.body
         const password=req.body.password
         const cPassword=req.body.cPassword
         if(password===cPassword)    
         {
          const createNewUsr=new userModel(newUser)
         const savedUser=await createNewUsr.save()
         res.render('singin') 
      }else{
          res.send('invalid password')
      }
     //     res.status(201).send(savedUser)
    } catch (error) {
         res.send(error)
    }
    
}
module.exports={getAllUsers,getUserById,getUserByName,updateUser,deleteUser,createUser}