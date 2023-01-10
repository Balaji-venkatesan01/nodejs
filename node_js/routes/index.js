
const express=require("express");
const router=express.Router();
const bookRouter=require("./book"); 

router.get("/",(req,res)=>{
    res.send("Hello World");
});

router.use('/book',bookRouter);

router.all("/*",(req,res)=>{
    res.send("page is not found");
});


module.exports=router;