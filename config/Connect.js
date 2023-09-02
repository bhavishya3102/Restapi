const mongoose=require('mongoose');

require('dotenv').config();
const Url=process.env.URL;

const Connect=()=>{
    mongoose.connect(Url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("db connect successfully");
    }).catch((error)=>{
    console.log("db not connect successfully");
    console.log(error);
    process.exit(1);
    })
}

module.exports=Connect;