const express = require("express");

const app = express();

app.use("/one",(req,res)=>{
    res.send("my name is ankit")
})

app.use("/test",(req,res)=>{
    res.send("my name is test")
})

app.listen(2500);