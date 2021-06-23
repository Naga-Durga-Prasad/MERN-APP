import {useHistory} from "react-router-dom"

function Admin(){

    




    let histroy=useHistory();

    //addproduct page
    function handleAddProduct(){
      histroy.push("/AddProduct")
    }
    //dispaly page
    function handleDisplayProduct(){
        histroy.push("/DispalyProduct")
      }

    return(<div>
    


  
        <div className=" border border-dark mt-5 d-flex bg-dark">
            <div className="m-5 border border-dark bg-light shadow ">
           <card>
              <h1 className="m-5">
                  Add Product
              </h1>
              <button className="btn btn-primary m-5" onClick={handleAddProduct}>Add Product</button>
           </card>
           </div>

           <div className="m-5 border bg-light border-dark shadow ">
           <card>
              <h1  className="m-5">
                  View Product
              </h1>
              <button className="btn btn-warning m-5" onClick={handleDisplayProduct}>View Product</button>
           </card>
           </div>

           <div className="m-5 border bg-light   border-dark shadow ">
           <card>
              <h1  className="m-5">
                  Remove Product
              </h1>
              <button className="btn btn-danger m-5" >Remove Product</button>
           </card>
           </div>

         

        </div>
    )


    </div>)
}

export default Admin;