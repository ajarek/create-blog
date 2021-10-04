const router = require('express').Router()
const User = require('../models/User')
const Post = require('../models/Post')

    router.get('/edit/:id',async(req,res)=>{
        const{id}=req.params
        const getData =await Post.findOne({_id:id}) 
        res.render('editPost',{post:getData})
    })
    .post('/edit/:id',(req,res)=>{
        const{id}=req.params
        const {title,desc,photo,username,textColor}=req.body
        Post.updateOne({_id:id},{title,desc,photo,username,textColor})
        .then(()=>{
            console.log('successfuly! updated the Post!')
            res.redirect('/posts')
        })
        .catch(err=>console.log(err))
    })
    .get('/delete/:id',(req,res)=>{
        const{id}=req.params
        Post.deleteOne({_id:id})
        .then(()=>{
            console.log('Deleted blog successfully!')
            res.redirect("/posts")
        })
         .catch((err)=>console.log(err))
        
    })
    
    module.exports=router