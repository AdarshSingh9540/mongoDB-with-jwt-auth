const {Router} = require('express');
const jwt = require('jsonwebtoken')
const adminMiddleware = require('../middlewares/admin');
const { Admin, Course, User } = require('../db');
const router = Router();
const {key} = require('../key')

router.post("/signup",async (req,res)=>{
    const username  = req.body.username;
    const password = req.body.password;

   await Admin.create({
        username:username,
        password:password
    })
        res.json({
        msg:"Admin create successfully ..! Welcome to Express"
        })

 
})

router.post('/signin' , async (req,res)=>{
  const username = req.body.username;
  const password = req.body.password;

const isValidated  = await User.find({
    username,
    password
})
if(User){
    
}

if(User){
    const token =  jwt.sign({
        username
      },key);
      res.json({
        token
      })

    }else{
        res.status(411).json({
            msg:"invalid username or password"
        })
    }
})

router.post('/courses' ,adminMiddleware,async (req,res)=>{
  
})

router.get("/courses",adminMiddleware,async (req,res)=>{
 
})

module.exports = router;