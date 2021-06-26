import {BrowserRouter,Switch,Link,Route} from "react-router-dom"
import Home from "./components/home"
import Login from "./components/login"
import Register from "./components/register"
import UserProfile from "./components/userProfile"
import Product from "./components/product"
import AddProduct from "./components/addproduct"
import DispalyProduct from "./components/displayproduct"

import Cart from "./components/cart"
import Admin from "./components/admin"
import {useState} from "react"

function App() {

  let [loginStatus,setLoginStatus]=useState(false)

  function logout(){
    setLoginStatus(false)
    localStorage.clear()
  }
  return (
    <div>

     
    <BrowserRouter>
<nav className="navbar navbar-expand-sm bg-dark ">


<ul className="navbar-nav">
<li className="nav-item">
     <Link to="/Home" className="nav-link text-warning">Home</Link>
  </li>
  

 



 {  !loginStatus?
 <ul className="navbar-nav"><li className="nav-item">
 <Link to="/Register" className="nav-link text-primary">Register</Link>
</li> 
  <li className="nav-item">
  <Link to="/Login" className="nav-link text-warning">Login</Link>
  </li>
  </ul>
   :
  <li className="nav-item">
  <Link to="/Login" onClick={()=>logout()} className="nav-link text-success">Logout</Link>
  </li>
}
  {/* <li className="nav-item">
  <Link to="/Users" className="nav-link text-danger">Users</Link>
  </li> */}
</ul>

</nav>


<Switch>

<Route path="/Home">
    <Home />
  </Route>

  <Route path="/Register">
    <Register />
  </Route>


  <Route path="/Product">
    <Product />
  </Route>

  <Route path="/AddProduct">
    <AddProduct />
  </Route>

  <Route path="/DispalyProduct">
    <DispalyProduct />
  </Route>

  
 

  <Route path="/Login">
   <Login setLoginStatus={setLoginStatus} />
  </Route>

  

  <Route path="/userprofile/:username">
    <UserProfile />
  </Route>

  <Route path="/admin">
    <Admin />
  </Route>

  <Route path="/Cart">
    <Cart />
  </Route>

</Switch>

</BrowserRouter>
<h1 className="text-center text-light bg-success mt-5">Please dont share your account details with any one</h1>
 <div className="text-start d-flex m-1 ">
   <span><img   height="200px" src="https://media.glassdoor.com/l/35/cb/87/3b/building.jpg" alt=""></img></span>
   <p className="m-1">Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services. Apple is the world's largest technology company by revenue (totalling $274.5 billion in 2020) and, since January 2021, the world's most valuable company. As of 2021, Apple is the world's fourth-largest PC vendor by unit sales,[9] and fourth-largest smartphone manufacturer.[10][11] It is one of the Big Five American information technology companies, along with Amazon, Google, Microsoft, and Facebook.[12][13][14]

Apple was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in 1976 to develop and sell Wozniak's Apple I personal computer. It was incorporated by Jobs and Wozniak as Apple Computer, Inc. in 1977, and sales of its computers, including the Apple II, grew quickly. They went public in 1980 to instant financial success. Over the next few years, Apple shipped new computers featuring innovative graphical user interfaces, such as the original Macintosh, announced with the critically acclaimed advert "1984". However, the high price of its products and limited application library caused problems, as did power struggles between executives. In 1985, Wozniak departed Apple amicably,[15] while Jobs resigned to found NeXT, taking some Apple co-workers with him</p>
 </div>
 <footer >
   <div className="bg-danger mt-1 text-center">
     <span className="h2 text-light m-5">Beware of Fake Websites </span>
    

   </div>
 </footer>



    </div>
  )
}

export default App;
