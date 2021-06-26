import { useEffect,useState } from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
import {useHistory} from "react-router-dom"

function UserProfile(){

    let [user,setUser]=useState("")
    let [count,setCount]=useState("")
    let histroy=useHistory();
    
let paramsObj=useParams()

useEffect(()=>{
    axios.get(`/user/getcount/${localStorage.getItem("username")}`)
.then(res=>{
    let userobj=res.data.message
    console.log(userobj)
   setCount(userobj)})
let userobj=JSON.parse( localStorage.getItem("user"));
setUser({...userobj})

},[paramsObj.username])

function handleDisplayProduct(){
    histroy.push("/DispalyProduct")
  }
  function handleDisplayCart(){
    histroy.push("/Cart")
  }



    return(
        <div className="text-center bg-dark text-light mt-5">
            <h1 className="text-end text-success">Welcome {paramsObj.username}<span> <img src={user.profilePic} width="70px"></img></span> </h1>
            <div className="text-center m-5">
            <h1>state :{user.state}</h1>
            <h1>gender:{user.gender}</h1>
            </div>

            <div className="row row-cols-sm-2 m-5 ">
               <div className="col- mb-5">
                   <div className="card border border-dark shadow">
                       <p className="text-dark mt-3 h6">click the button to see all the available products</p>
                       <button className="btn btn-primary mb-5 ms-5 me-5" onClick={handleDisplayProduct}>View Products</button>

                   </div>
               </div>
               

               <div className="col mb-5">
                   <div className="card border border-dark shadow">
                       <p className="text-dark mt-3 h6">click the button to see all the products in your cart</p>
                       <button className="btn  btn-warning mb-5 ms-5 me-5" onClick={handleDisplayCart}>Cart({count})</button>

                   </div>
            </div>
           </div>
        </div>
        

    )
}
export default UserProfile;