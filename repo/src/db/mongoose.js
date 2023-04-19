const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://SnehaJaiswal:CIa0fM12VOx3RXt9@cluster0.eb9am0x.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("db connected successfully")
})
.catch((err)=>{
    console.log(err);
})
module.exports=mongoose;