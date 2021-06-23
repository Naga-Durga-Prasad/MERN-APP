const exp = require("express")
const adminApi=exp.Router();
adminApi.use(exp.json())
const errHandler=require("express-async-handler")

//web token
const jwt=require("jsonwebtoken")




adminApi.post("/login",errHandler( async(req,res,next)=>{
    let adminCollectionObject=req.app.get("adminCollectionObject")

    let credentials=req.body;
    
    //verify user
    let user=await adminCollectionObject.findOne({username:credentials.username})
 
    //if user not existed
    if(user===null){
        res.send({message:"invalid username"})
    }
    //user existed
else{
    //compare password
   
    //if password not matched
    if(credentials.password!==user.password){
        res.send({message:"invalid password"})
    }
    //if passsword matched
    else{
        //delete password from user
        delete user.password
        //create a token and send
        let token=await jwt.sign({username:credentials.username},"abcdef",{expiresIn:180})
       res.send({message:"login success",token:token,username:credentials.username,user:user})
    }
}}))





module.exports= adminApi;