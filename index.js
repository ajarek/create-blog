const express =require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const multer = require('multer')
const {port}=require('./config')
dotenv.config()
const app = express()
//databasa
mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("Connecting to Database")
})

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(require('./routes/home'))
app.use(require('./routes/login'))
app.use(require('./routes/register'))
app.use(require('./routes/posts'))
app.use(require('./routes/newposts'))
app.use(require('./routes/editPost'))



app.listen(port, () => {
    console.log('Backend is running:'+ port);
})