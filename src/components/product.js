
import {useHistory} from "react-router-dom"

function Product(){


    let histroy=useHistory();

    
    //dispaly page
    function handleDisplayProduct(){
        histroy.push("/DispalyProduct")
      }


    return(
        <div className=" border border-dark mt-5 d-flex bg-dark">
            <div className="m-5 border border-dark bg-light shadow mx-auto ">
          

           <div className="m-5 border bg-light border-dark shadow ">
           <card>
              <h1  className="m-5">
                  View Product
              </h1>
              <button className="btn btn-warning m-5" onClick={handleDisplayProduct}>View Product</button>
           </card>
           </div>

           

         

        </div>
        </div>
    )
}
export default Product;