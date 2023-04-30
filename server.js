const express = require("express");
const app =express();
const port= 3000;

app.get("/" ,(req,res)=>{
    res.send("hello world")
})
 
app.get("/about" ,(req,res)=>{
    res.send("hello from osama")
})

app.listen(port,()=>{
    console.log("listen at this port 3000")
})