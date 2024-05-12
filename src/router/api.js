
const express = require('express');
const userController=require("../controller/usersController")
const TaskController=require("../controller/TaskController")
const Middleware=require('../middleware/authMiddleware')




const router=express.Router();

router.post('/registration',userController.registration)
router.post('/login',userController.login)
router.get('/verifyEmail/:email',userController.verifyEmail)
router.get('/verifyOtp/:email/:otp',userController.verifyOtp)
router.get('/passwordReset/:email/:otp/:Password',userController.passwordReset)
//After Login
router.get('/profileDetails',Middleware,userController.profileDetails)
router.post('/profileUpdate',Middleware,userController.profileUpdate)

//task create ,read ,update, delete

router.post('/tesk/Create',Middleware,TaskController.Create)
router.get('/teskRead',Middleware,TaskController.Read)
router.post('/teskUpdate/:id',Middleware,TaskController.Update)

router.get('/teskDelete/:id',Middleware,TaskController.delete)
router.get('/task/complete/:id',Middleware,TaskController.complete)







module.exports=router;