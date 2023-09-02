const productmodel=require("../models/Productsmodel");

exports.Product=async(req,resp)=>{
    try{
       const {company,featured,name,sort,select}=req.query;

       const queryobj={};
       // Advance search 
       // search by query parameter
       // sort--
       // we write in url company=apple,realme
       // but internally execute as company=apple realme
       // -company sort as descending order and company sort as 
       // ascending order



       if(company){
        queryobj.company={ $regex:company,$options:"i"};
       }
       if(name){
        queryobj.name={ $regex:name,$options:"i"};
       }
       if(featured==="true" || featured==="false"){
        queryobj.featured={ $regex:featured,$options:"i"};
       }

       const apidata=productmodel.find(queryobj);

       if(sort){
    const sortfix=sort.replace(","," ");
    // important step
    queryobj.sort=apidata.sort(sortfix);
}



if(select){
    const selectfix=select.split(",").join(" ");
    // important step
    queryobj.select=apidata.select(selectfix);
}


       // pagination

       const page=Number(req.query.page)|| 1;
       const limit=Number(req.query.limit)||3;
       // formula to calculate the skip values 
       // if page=2 and limit=3 then skip=(2-1)*3=3 skip first 3data 
       let skip=(page-1)*limit;
       
       if(page || limit){
           queryobj.page=apidata.skip(skip).limit(limit);
       }

       console.log("query--------------",queryobj);
const mydata=await apidata;
resp.status(200).json({
    mydata,
    length:mydata.length
})
    }catch(error){
        resp.status(500).json({
            success:false,
            message:"internal server errror"
        })
    }

}


// product testing
exports.Producttesting=async(req,resp)=>{
    try{
        const mydata=await productmodel.find({});
        resp.status(200).json({
            mydata
        })
            }catch(error){
                resp.status(500).json({
                    success:false,
                    message:"internal server errror"
                })
            }

}