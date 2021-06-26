import { useEffect,useState } from "react"

const axios=require("axios")

function Cart(){

    let [cart,setCart]=useState()

useEffect(()=>{
axios.get(`/user/getcart/${localStorage.getItem("username")}`)
.then(res=>{
    let cartObj=res.data.message
 
    setCart({...cartObj})
   
    
})
},[])


    return(<div className="border border-dark m-5">
          <table className="table table-bordered bg-dark text-light text-center ">
              <tr className="text-light h4">
              <th>Product Name</th>
              <th>Price</th>
              <th>Company</th>
              <th>Product Pic</th>
              <th>Remove Item / Place Order</th>
              </tr>
              
              {
               cart && cart.products.map((elements)=>{
                   return(
                       <tr>
                       <td>{elements.productName}</td>
                       <td>{elements.price}</td>
                       <td>{elements.company}</td>
                       <td><img width="100px" height="100px" src={elements.profilePic}></img></td>
                       <td><button className="btn btn-danger ">Remove Item</button> <button className="btn btn-success  ms-5 ">Place Order</button></td>
                       </tr>
                       
               )})
               
              }
          </table>
    </div>)
}

export default Cart;