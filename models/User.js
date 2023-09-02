const mongoose=require("mongoose");
const userschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    }
})