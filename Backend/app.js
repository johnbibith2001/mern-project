const express=require('express')
const app=express()
//connect with mangodb and express
const mongoose=require('mongoose')
//import model
const User=require('./model/users')
//
const cors=require('cors')
//middlewar
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
// we can specify the name at the last of url
const db_url='mongodb://localhost:27017/users'
//connection establish
mongoose.connect(db_url).then(()=>{
    console.log("connection established");
})

app.post('/login',(req,res)=>{
    User.findOne({emailId:req.body.email})
    .then((userData)=>{
        if(userData){
            if(req.body.password===userData.password){
                res.send({message:"login seccessful",status:200})
            }
            else{
                res.send({message:"please enter the valid passwordm or email id"})
            }
        }
        else{
            res.send({message:"please enter your valid password"})
        }
    })
})

app.post('/register',async(req,res)=>{
    User.findOne({emailId:req.body.email})
    .then((userData)=>{
        if(userData){
           //error msg
           res.send({message:"User Already Register"})
        }
        else{
               let userData=new User({
                firstName:req.body.first,
                lastName:req.body.last,
                emailId:req.body.email,
                password:req.body.password
               })

               userData.save()
               .then(()=>{
                res.send({message:"User registered successfully"})
                })
                .catch(()=>{
                    res.send({message:"User registration failed. Try again Later"})
                })
              
        }
    })
})

app.listen(3000,()=>{
    console.log("Server is running no 3000");
})
