const mongoose=require("mongoose");

const productschema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name must be provided"],
        trim:true,
        },
        price:{
            type:Number,
            required:[true,"price must be provided"]
        },
        featured:{
            type:Boolean,
            default:false
        },
         rating:{
            type:Number,
            default:4.8,
          
            },
            createdAt:{
                type:Date,
                default:Date.now(),
            },
            company:{
                type:String,
                enum:["apple","mi","realme","redmi"]
            }
})

module.exports=mongoose.model("productapi",productschema);