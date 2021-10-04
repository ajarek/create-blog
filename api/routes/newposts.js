const router = require('express').Router()
const User = require('../models/User')
const Post = require('../models/Post')
router.get('/newposts',async(req,res)=>{
    res.render('newposts')
})
// //CREATE POST
router.post('/create', (req, res) => {
    
       const newPost= new Post(req.body)
        try {
         newPost.save()
        res.redirect('/posts')
        } catch (err) {
            res.status(500).send(err)
        }
    
})
module.exports = router