import {useForm} from "react-hook-form"
import {useHistory} from "react-router-dom"
import { useState } from "react";
import { jsxClosingElement } from "@babel/types";

const axios=require("axios")
function UserRegister(){
    let {register,handleSubmit,formState:{errors}}=useForm();
    let [file,setFile]=useState();
    let histroy=useHistory();




    const formHandleSubmit=(userObj)=>{

//create Formdata obj
let formData=new FormData();
//add files to formdat
formData.append("photo",file,file.name)
//add userobj to form data
formData.append("userObj",JSON.stringify(userObj))

axios.post("/user/createuser",formData)
.then(res=>{
    let resobj=res.data
    alert(resobj.message)
    histroy.push("/Login")
})
.catch(err=>{
    console.log(err)
    alert("something is wrong")
})

    }

    const onFileSelect=(e)=>{
        setFile(e.target.files[0])

    }

    return(<form className="m-5  w-75 mx-auto" onSubmit={handleSubmit(formHandleSubmit)}>

<label htmlFor="us">UserName</label>
<input type="text" id="us" {...register("username",{required:true})} className="form-control" ></input>
{errors.username?.type==="required" && <p className="text-danger">username is required</p>}
{errors.username?.type==="minLength" && <p>6 letters is required</p>}

<label htmlFor="pw" className="mt-5">password</label>
<input type="password" id="pw" {...register("password")} className="form-control"></input>


<label className="mt-5">select state</label>
<select className="form-select" {...register("state",{required:true})}>
    <option value="tamilnadu" >tamilnadu</option>
    <option value="telangana" >telangana</option>
    <option value="andhrapradesh">andhrapradesh</option>

    
</select>




<label className="mt-5">select gender</label>
<div>
    <input type="radio" id="m" className='form-check-input' value="male" {...register("gender",{required:true})}></input>
    <label htmlFor="m" className="form-check-label">Male</label>
</div>

<div>
    <input type="radio" id="f" className='form-check-input' value="female" {...register("gender",{required:true})}></input>
    <label htmlFor="f" className="form-check-label">FEmale</label>
</div>



<label className="mt-5">select Skills</label>
<div className="form-check">
    <input type='checkBox' className="form-check-input" id="java" {...register("java")}></input>
    <label htmlFor="java" className="form-check-label">java</label>
</div>
<div className="form-check">
    <input type='checkBox' className="form-check-input" id="css" {...register("css")}></input>
    <label htmlFor="css" className="form-check-label">css</label>
</div>
<div className="form-check">
    <input type='checkBox' className="form-check-input" id="react" {...register("react")}></input>
    <label htmlFor="react" className="form-check-label">react</label>
</div>
<div className="mt-5 mb-5">
    <label> Please upload profile pic</label>
    <input type="file" className="form-control" name="photo" onChange={(e)=>onFileSelect(e)}></input>
</div>



<button type="submit" className="btn btn-success mt-5">Submit</button>
    </form>)
}
export default UserRegister;