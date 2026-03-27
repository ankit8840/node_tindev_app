const express = require("express");
const Auth = require("./middleware/Auth")
const connectDB = require("./database/connection");
const User = require("./models/User")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// create 3 API 
app.use("/admin",Auth)

app.post("/admin/getAdmin",(req,res)=>{
    //throw new Error("error");
    
    res.send("users listed in the app")
})

app.get("/getCost",(req,res)=>{
    res.send("cost received")
})

app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("something went wrong")
    }
})
app.post("/user",async(req,res)=>{
    const userdata = req.body
    const user = new User(userdata)
    try {
        await user.save()
        res.send("user inserted")
    } catch (error) {
        res.status(500).send(error)
    }
    

})
connectDB().then(()=>{
    console.log("connectDB")
    app.listen(2500)
}).catch((err)=>{
    console.log(err)
})
