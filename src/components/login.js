import {useForm} from "react-hook-form"
import {useHistory} from "react-router-dom"
import axios from "axios"

function Login(params){
    let {register,handleSubmit,formState:{errors}}=useForm();
    let histroy=useHistory();


    const formHandleSubmit=(userObj)=>{

        
       axios.post(`/${userObj.type}/login`,userObj,)
       .then(res=>{
           let resobj=res.data
         
           if(resobj.message==="login success"){
               //save token to local storage
               localStorage.setItem("token",resobj.token)
               localStorage.setItem("username",resobj.username)
               localStorage.setItem("user",JSON.stringify(resobj.user))
               
               //set user login status
               params.setLoginStatus(true)
               //navigate to use
               if(userObj.type==="user"){
               alert(resobj.message)
               histroy.push(`/userprofile/${resobj.username}`)
               }

               if(userObj.type==="admin"){
                alert(resobj.message)
                histroy.push("/Admin")
                }

           }
           else{
               alert(resobj.message)
           }
       })
       .catch(err=>{
           console.log(err)
           alert("something went wrong in login")
       })
     


    }
    return(
        <form className="m-5  w-75 mx-auto" onSubmit={handleSubmit(formHandleSubmit)}>

            <label>Type</label>
            <div className='d-flex'>
<input type="radio" name="type" id="admin" value="admin" {...register("type")} className="form-check-input"></input>
<label htmlFor="admin" className="form-check-label">Admin</label>
<input type="radio" name="type" value="user" {...register("type")} className="form-check-input"></input>
<label className="form-check-label">User</label>
</div>
<label htmlFor="us" className="mt-2">UserName</label>
<input type="text" id="us" {...register("username",{required:true})} className="form-control " autoComplete="off"></input>
{errors.username?.type==="required" && <p className="text-danger">username is required</p>}
{errors.username?.type==="minLength" && <p>6 letters is required</p>}

<label htmlFor="pw" className="mt-5">password</label>
<input type="password" id="pw" {...register("password")} className="form-control"></input>



<button type="submit" className="btn btn-success mt-5">Submit</button>
    </form>
    )
}
export default Login;