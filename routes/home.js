const router = require('express').Router()
const User = require('../models/User')
const Post = require('../models/Post')
const mysort = {createdAt:-1}

router.get('/',async(req,res)=>{
  
    
  
  try {
    let posts
      
      posts = await Post.find({}).sort(mysort)
      res.render('home',{myhome:posts})
      }
     
  
  
   catch (err) {
    res.status(500).send(err)
  }
})
module.exports=router