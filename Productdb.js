const connectdb=require("./config/Connect");
const productmodel=require("./models/Productsmodel");
const product=require("./Product.json");

require("dotenv").config();

const start=async ()=>{
    try{
await connectdb();
// create the entries in the database
await productmodel.create(product);

    }catch(error){
        console.log(error);

    }
}

start();