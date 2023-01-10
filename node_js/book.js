const express=require("express"); 
const app=express();
const connect=require("./database/db");
const bodyParser=require('body-parser')
app.use(bodyParser.json())

app
.route("/book")
.get(async(req,res)=>{
    const db=await connect(); 
    const books=await db.collection('book').find().toArray()
    res.json(books);
})
.post(async(req,res)=>{
    const db=await connect();
    db.collection("book").insertOne(req.body);
    res.send("file is posted");
});

app.listen(3000);
