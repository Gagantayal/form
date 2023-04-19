const mongoose = require("../db/mongoose");
const validator = require('validator')

const teamSchema= new mongoose.Schema({
    teamname:{
        type: String,
        unique:true,
        required: [true, "Please Enter team Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],

    },
    leadername:{
        type: String,
        unique:true,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],

    },
    leaderemail:{
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        // validate: [validator.isEmail, "Please Enter a valid Email"],
        match : [/^\w+([\.-]?\w+)*@akgec\.ac\.in/,"Please fill a valid email address"]
    },
    leaderphone:{
        type:String,
        required:[true,"please enter your contact number"],
        maxLength:[10,"wrong contact number"],
        minLength:[10,"wrong contact number"]
         
    },
    leaderstudent: {
        type: String,
        unique:true,
        required: [true, "Please Enter Your student number"],
        maxLength: [8, "give your correct stdNo."],
        select: false,
    },
    leadergender:{
        type:String,
        required:[true,"please enter the gender"]
    },
    leaderbranch:{
        type:String,
        required:[true,"please enter the branch"]
    },
    leaderyear:{
        type:String,
        required:[true,"please enter your year"]
    },
    name1:{
        type: String,
        unique:true,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],

    },
    email1:{
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        // validate: [validator.isEmail, "Please Enter a valid Email"],
        match : [/^\w+([\.-]?\w+)*@akgec\.ac\.in/,"Please fill a valid email address"]
    },
    phone1:{
        type:String,
        unique:true,
        required:[true,"please enter your contact number"],
        maxLength:[10,"wrong contact number"],
        minLength:[10,"wrong contact number"]
         
    },
    student1: {
        type: String,
        unique:true,
        required: [true, "Please Enter Your student number"],
        maxLength: [8, "give your correct stdNo."],
        select: false,
    },
    gender1:{
        type:String,
        required:[true,"please enter the gender"]
    },
    branch1:{
        type:String,
        required:[true,"please enter the branch"]
    },
    year1:{
        type:String,
        required:[true,"please enter your year"]
    },  
    name2:{
        type: String,
        unique:true,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],

    },
    email2:{
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        // validate: [validator.isEmail, "Please Enter a valid Email"],
        match : [/^\w+([\.-]?\w+)*@akgec\.ac\.in/,"Please fill a valid email address"]
    },
    phone2:{
        type:String,
        unique:true,
        required:[true,"please enter your contact number"],
        maxLength:[10,"wrong contact number"],
        minLength:[10,"wrong contact number"]
         
    },
    student2: {
        type: String,
        unique:true,
        required: [true, "Please Enter Your student number"],
        maxLength: [8, "give your correct stdNo."],
        select: false,
    },
    gender2:{
        type:String,
        required:[true,"please enter the gender"]
    },
    branch2:{
        type:String,
        required:[true,"please enter the branch"]
    },
    year2:{
        type:String,
        required:[true,"please enter your year"]
    }
    
})
const Member = mongoose.model("Member", teamSchema);

module.exports = Member;