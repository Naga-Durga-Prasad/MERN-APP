import { useEffect,useState } from "react"

const axios=require("axios")
function DispalyProduct(){

 console.log(localStorage.getItem("username"))

let [product,setProduct]=useState()

useEffect(()=>{
axios.get("/product/getproduct")
.then(res=>{
    let productObj=res.data.message
    
    setProduct([...productObj])
    
})
},[])

  function cartItems(elements){
      console.log(elements)
      //username from locl storage
    let username= localStorage.getItem("username")
    //adding it elements
    let productObj={...elements}
    productObj.username=username
      //make req
      axios.post("/user/addtocart",productObj)
      .then(res=>{
        let  responseObj=res.data
          alert(responseObj.message)
      })
      .catch(err=>{
          alert(err.message)
      })
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
                        <h3 className="text-dark">Product Name : {elements.productName}</h3>
                        <h3 className="text-dark">Price : {elements.price}</h3>
                        <h3 className="text-dark">Company : {elements.company}</h3>
                        
                        {   localStorage.getItem("username")==="admin"?
                            
                                
                                <div className="ms-5 m-3">
                                <button className="btn btn-success" >Edit</button>
                                <button className="btn btn-primary ms-5">Remove</button>
                            </div>:
              
            
                            
                        <div className="ms-5 m-3">
                            <button className="btn btn-success" onClick={()=>cartItems(elements)}>Add to cart</button>
                            <button className="btn btn-primary ms-5">Place Order</button>
                        </div>
              }
              
                            </div>
                            </div>
                    )
                })
            } 


              </div>
                
        
        
    )
}
export default DispalyProduct