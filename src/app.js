const express = require("express");

const app = express();
app.use("/",(re,res,next)=>{
    //res.send("Ankit")
    next()
},(req,res,next)=>{
    //res.send("second Ankit")
    next()
},(req,res)=>{
    res.send("third resp");
}
)
// app.get("/one/:id/:name",(req,res)=>{
//     res.send(req.query)
// })

// app.post("/one",(req,res)=>{
//     res.send("my name is test")
// })


// app.use("/one",(req,res)=>{
//     res.send("default route")
// })
app.listen(2500);