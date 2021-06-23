import { useEffect,useState } from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
import {useHistory} from "react-router-dom"

function UserProfile(){

    let [user,setUser]=useState("")
    let histroy=useHistory();
    
let paramsObj=useParams()

useEffect(()=>{
//     axios.get(`/user/getuser/${paramsObj.username}`)
// .then(res=>{
//     let userobj=res.data.message
//    setUser({...userobj})
let userobj=JSON.parse( localStorage.getItem("user"));
setUser({...userobj})



},[paramsObj.username])



    return(
        <div className="text-center bg-dark text-light mt-5">
            <h1 className="text-end text-success">Welcome {paramsObj.username}</h1>
            <div className="text-center m-5">
            <h1>state :{user.state}</h1>
            <h1>gender:{user.gender}</h1>
            <img src={user.profilePic}></img>
            </div>
           
        </div>

    )
}
export default UserProfile;