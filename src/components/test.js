import axios from "axios"
import Axios from "axios"

function Text(){

    let token=localStorage.getItem("token")

    //create new axios req obj

    let apiUrl="http://localhost:5000"

    const axiosReq=axios.create({
        baseURL:apiUrl,
        headers:{
            Authorization: `Bearer ${token}`
        }
    })

    const makeReqToProtectedRoute=()=>{
        axiosReq.get("/user/test")
        .then(res=>{
            alert(res.data.message)
  
        })
    }
    return(
        <div>
            <h1>hello</h1>
            <button onClick={()=>makeReqToProtectedRoute()}>req</button>
        </div>
        
    )
}

export default Text