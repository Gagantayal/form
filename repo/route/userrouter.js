// const express=require('express');
// const nodemailer=require('nodemailer')
// const router=express.Router();
// require('dotenv').config()
// const verifyModel=require('../src/models/verifymodel');
// const data = require("../src/models/leader")

// const getRandomNumber=(max)=>{
//     return Math.floor(Math.random()*max);
// }

// const mail=(otp,email)=>{
//     var transporter = nodemailer.createTransport({
//         service: "gmail",
//         port: 587,
//         auth: {
//           user: process.env.AUTH_EMAIL, 
//           pass: process.env.AUTH_PASS, 
//         },
//       });
//       const data={
//         from: '"Sneha Jaiswal" <sneha2112046@akgec.ac.in>',  
//         to:email,
//         subject: "User verification", 
//         text: "Hello!", 
//         html: `<b>Your OTP is:${otp}</b>`,          
//        }
//        transporter.sendMail(data,async(error,info)=>{
//         if(error){
//             throw new error;
//         }
//             console.log("email sent",info.messageId);
            
//        });
// }

// const sendOtp=async(req,res)=>{
//    try{
//     const email=req.body.email;
//     const otp=getRandomNumber(10000);
//     if(otp<1000){
//         otp=otp+1000;
//     }
//     const existinguser1=await data.findOne({leaderemail:email})
//     const existinguser2=await data.findOne({email1:email})
//     const existinguser3=await data.findOne({email2:email})
//     if(existinguser1||existinguser3||existinguser2){
//         res.status(409).json({
//             message:"user already registered"
//         })
//         return;
//     }

//     const existinguser4=await verifyModel.findOne({email:email});
//     if(existinguser4){
//         await verifyModel.findOneAndUpdate({email:email},{otp:otp})
//         mail(otp,email);
//         res.status(200).json({
//             message:"mail sent"
//         })
//         return;
//     }

//     const user=await verifyModel.create({email:email,otp:otp});
//        mail(otp,email);
//        res.status(200).json({
//         message:"mail sent",
//     })

//    }
//    catch(e){
//      console.log(e);
//    }  
// }

// const verifyOtp=async(req,res)=>{
//     try{
//         const { email , otp } = req.body;
        
//         const user=await verifyModel.findOne({email:email});
//         if(user){
//             console.log(user)
//             const userOtp=user.otp;
//             if(otp===userOtp){
//                 res.status(200).json({
//                     message:"user verified"
//                 })
//                 console.log("user verified");                
//             }
//             else{
//                 console.log("Otp doesn't match");
//                 res.status(401).json({
//                     message:"Otp doesn't match"
//                 })
//             }
//         }
//         else{
//             res.status(404).json({
//                 message:'signup again'
//             })
//         }
//     }
//     catch(e){
//         console.log(e);
//     }
// }

// const resendOtp=async(req,res)=>{
//     const email=req.body.email;
//     const otp=getRandomNumber(10000);
//     if(otp<1000){
//         otp=otp+1000;
//     }
//     const user=await verifyModel.findOneAndUpdate({email:email},{otp:otp})
//     if(!user){
//         await verifyModel.create({email:email,otp:otp})  
//     }  
//     res.status(200).json({
//         message:"otp resent"
//     })
//     mail(otp,email);

// }


// const register=async(req,res)=>{
//     try{
//         const registerdata = new data(req.body);
//         const createuser = await registerdata.save();
//         res.status(200).send(createuser)
//       }
//     catch(e){
//         res.status(404).send(e)
//     }
// }

// router
// .route('/sendotp')
// .post(sendOtp)

// router
// .route('/verifyotp')
// .post(verifyOtp)

// router
// .route('/resendotp')
// .post(resendOtp);

// router
// .route('/form')
// .post(register)
// module.exports=router;
