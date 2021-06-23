const exp = require("express")
const userApi=exp.Router();
userApi.use(exp.json())
const errHandler=require("express-async-handler")

//cloudinary
const cloudinary=require("cloudinary").v2
const multer=require("multer")
const {CloudinaryStorage}=require("multer-storage-cloudinary")
//config cloudinary
cloudinary.config({
    cloud_name:"dplnv1vyk",
    api_key:"166191465281893",
    api_secret:"Hkf_raTMWsREuWPDi8LLehYXK2E"
});

////configure cloudinary storage
const clStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        return {
            folder: 'CDB21DX003-Product',
            public_key: file.fieldname + '-' + Date.now()
        }
    }
})
//configure multer
const multerObj=multer({storage: clStorage})





//create product by async
userApi.post('/createproduct',multerObj.single("photo"),errHandler( async(req, res, next) => {

    let ProductCollectionObject=req.app.get("productCollectionObject")

    //get user object
    console.log(req.body)
    let newProduct = JSON.parse(req.body.userObj)
    //check username is already existed
    let user=await ProductCollectionObject.findOne({ productName: newProduct.productName })
    if(user===null){
       
       
       // adding cdn links
       newProduct.profilePic=req.file.path;

      await ProductCollectionObject.insertOne(newProduct)
           res.send({message:"product created"})
   }
   else{
       res.send({message:"product existed"})
   }
}))


//read product using async and awit
userApi.get("/getproduct", errHandler( async (req, res, next) =>{

    let ProductCollectionObject=req.app.get("productCollectionObject")

    let userlist= await ProductCollectionObject.find().toArray();
    res.send({message:userlist})
}))

module.exports= userApi;