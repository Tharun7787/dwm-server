const mongoose=require("mongoose");
const userschema=new mongoose.Schema({
Name:{
    type:String,
    required:true,
},
email:{
    type: String,
    unique: true,
    required: true,
},
phone:{
    type:Number,
    unique:true,
    required:true,
},
password:{
    type:String,
    unique:true,
    required:true,
},
})

module.exports=mongoose.model("User",userschema)