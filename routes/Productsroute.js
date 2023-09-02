const express=require("express");
const router=express.Router();

const {Product,Producttesting}=require("../controllers/Productscontroller");

router.get('/',Product);
router.get('/testing',Producttesting);


module.exports=router;