const express=require('express')
const { getAllUsers, getUserById, createUser, deleteUser, updateUser } = require('../controller/userController')

const router=new express.Router()

router.route('/').get(getAllUsers)
router.route('/:id').get(getUserById)
router.route('/').post(createUser)
router.route('/:id').delete(deleteUser)
router.route('/:id').patch(updateUser)

module.exports=router