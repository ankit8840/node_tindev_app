const express = require("express");

const app = express();

app.get("/one/:id/:name",(req,res)=>{
    res.send(req.query)
})

app.post("/one",(req,res)=>{
    res.send("my name is test")
})


app.use("/one",(req,res)=>{
    res.send("default route")
})
app.listen(2500);