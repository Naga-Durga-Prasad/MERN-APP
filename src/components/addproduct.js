import {useForm} from "react-hook-form"
import { useState } from "react";
import {useHistory} from "react-router-dom"
import userEvent from "@testing-library/user-event";



const axios=require("axios")
function UserRegister(){
    let {register,handleSubmit,formState:{errors}}=useForm();
    let [file,setFile]=useState();

    let histroy=useHistory();
  




    const formHandleSubmit=(productObj)=>{

//create Formdata obj
let formData=new FormData();
//add files to formdat
formData.append("photo",file,file.name)
//add userobj to form data
formData.append("userObj",JSON.stringify(productObj))

axios.post("/product/createproduct",formData)
.then(res=>{
    let resobj=res.data
    alert(resobj.message)
    histroy.push("/DispalyProduct")
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

<label htmlFor="us">Product Name</label>
<input type="text" id="us" {...register("productName")} className="form-control" ></input>


<label htmlFor="pw" className="mt-5">Price</label>
<input type="number" id="pw" {...register("price")} className="form-control"></input>

<label htmlFor="us" className="mt-5">Company</label>
<input type="text" id="e" {...register("company")} className="form-control" ></input>




<div className="mt-5 mb-5">
    <label> Please upload  pic</label>
    <input type="file" className="form-control" name="photo" onChange={(e)=>onFileSelect(e)}></input>
</div>



<button type="submit" className="btn btn-success mt-5">Submit</button>
    </form>)
}

export default UserRegister;