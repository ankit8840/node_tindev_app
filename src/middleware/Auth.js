const Auth=(req,res,next)=>{
    if(req.body.token!="12345678")
        res.status(401).send("invalid token")
    else{
        next()
    }
}
module.exports=Auth