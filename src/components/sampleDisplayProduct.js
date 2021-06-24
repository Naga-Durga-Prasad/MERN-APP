import { useEffect,useState } from "react"
import {useHistory} from "react-router-dom"

const axios=require("axios")
function SampleDispalyProduct(){


let [product,setProduct]=useState()
let histroy=useHistory();

useEffect(()=>{
axios.get("/product/getproduct")
.then(res=>{
    let productObj=res.data.message
    console.log(productObj)
    setProduct([...productObj])
    
})
},[])

function buttonClick(){

    alert("You should login for this operation to excute")
    histroy.push("/Login")
}
  
     
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
                            <button className="btn btn-success" onClick={buttonClick}>Add to cart</button>
                            <button className="btn btn-primary ms-5"onClick={buttonClick}>Place Order</button>
                        </div>
                            </div>
                            </div>
                    )
                })
            } 


              </div>
                
        
        
    )
}
export default SampleDispalyProduct