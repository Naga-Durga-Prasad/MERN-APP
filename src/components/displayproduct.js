import { useEffect,useState } from "react"

const axios=require("axios")
function DispalyProduct(){


let [product,setProduct]=useState()

useEffect(()=>{
axios.get("/product/getproduct")
.then(res=>{
    let productObj=res.data.message
    console.log(productObj)
    setProduct([...productObj])
    
})
},[])

  
     
    return(
        
        <div className="row row-cols-sm-3  bg-secondary  ">
            

 {
              product  &&  product.map((elements)=>{
                    return(
                    <div className=" col ms-5  m-5 ">
                        <div className=" card border border-dark shadow" >
                        <img weight="200" height="250" alt="Cinque Terre" src={elements.profilePic}></img>
                        <hr className="border border-dark"></hr>
                        <h3>Product Name : {elements.productName}</h3>
                        <h3>Price : {elements.price}</h3>
                        <h3>Company : {elements.company}</h3>
                        <div className="ms-5 m-3">
                            <button className="btn btn-success">Add to cart</button>
                            <button className="btn btn-primary ms-5">Place Order</button>
                        </div>
                            </div>
                            </div>
                    )
                })
            } 


              </div>
                
        
        
    )
}
export default DispalyProduct