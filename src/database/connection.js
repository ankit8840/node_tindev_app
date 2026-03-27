const mongoose = require("mongoose")

const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://Ankitdev9502:uxXny6C5Ecy0Kpz@nodeseason1.etifuob.mongodb.net/devTinder');
}
module.exports=connectDB
