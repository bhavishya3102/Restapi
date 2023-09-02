const express=require("express");
const app=express();

const productroute=require("./routes/Productsroute");

app.use(express.json());

//mounting
app.use("/api/v1",productroute);

// connect
const Connectdb=require("./config/Connect.js")
Connectdb();

// start the server
require("dotenv").config();
const port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`server is starting at port no ${port}`);
})

// default route
// app.get("/",(req,resp)=>{
//     resp.send(`<h1> this is home page</h1>`);
// })
