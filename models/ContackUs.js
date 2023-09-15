const mongoose=require("mongoose");
const contactSchema=new mongoose.Schema({
Name:{
    type:String,
    required:true,
},
Email:{
    type: String,
    required:true,
    unique:true,
},
Phonenumber: {
    type: String,
    required: true,
  },
Message: {
    type: String,
    required: true,
  }
})

module.exports=mongoose.model("Contact",contactSchema)