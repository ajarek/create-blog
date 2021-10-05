const router = require('express').Router()
const User = require('../models/User')
const Post = require('../models/Post')

router.get('/posts',async(req,res)=>{
  
  const username =getName;
  
  try {
    let posts
    if (username) {
      posts = await Post.find({ username })
    
      }
     else {
      posts = await Post.find();
    }
  
   res.render('posts',{names:getName,myposts:posts})
  } catch (err) {
    res.status(500).send(err)
  }
})
  
module.exports = router