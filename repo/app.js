const express = require("express")
const app = express();
// const dotenv = require("dotenv")

const port = process.env.PORT || 8000;
const cors= require('cors')
app.use(cors())
// require("./src/db/conn")

app.use(express.urlencoded({extended:false}))
app.use(express.json());
const userRouter=require('./route/userrouter')
// app.use('/',userRouter)


// const express = require('express')
const bodyParser= require('body-parser')
const axios = require("axios");
// const e = require('express');


require('dotenv').config()

// const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.post("/form",function(req,res){
    const captcha=req.body.captcha;
    if(
        captcha === undefined||
        captcha === ''||
        captcha === null
        ){
            return res.json({
                "success":false,
                "msg":"Please select capcha"
            })
        }
        const secretkey = process.env.SECRET_KEY;
    
        const verifyurl = `https/google.com/recaptcha/api/siteverify?secret=${secretkey}&response=${captcha}`;
        axios.post(verifyurl)
        .then((response)=>{
            res.json({
                msg:"ok",
                response:response
            })
            async function save(req,res){
                try{
                    const registerdata = new data(req.body);
                    const createuser = await registerdata.save();
                    res.status(200).send(createuser)
                  }
                catch(e){
                    res.status(404).send(e)
                }
            }save()
        })
        .catch((e)=>{
            res.status(404).json({
                msg:"not ok",
                response:e
            })
        })
        
        
            
})

// app.post('/form',async(req,res)=>{
//     try{
//         const registerdata = new data(req.body);
//         const createuser = await registerdata.save();
//         res.status(200).send(createuser)
//       }
//     catch(e){
//         res.status(404).send(e)
//     }
// })

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})