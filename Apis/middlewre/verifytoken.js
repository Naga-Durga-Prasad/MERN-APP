const jwt=require("jsonwebtoken")

const Chektoken=(req,res,next)=>{
    try{
        let token=req.headers.authorization.split(" ")[1]
        jwt.verify(token,"abcdef")
        next()
    }
    catch(err){
        res.send({message:"Authentication failed"})
    }
}

module.exports=Chektoken;