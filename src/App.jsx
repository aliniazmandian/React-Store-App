
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./protectedRoutes/ProtectedRoute.jsx";
import Product from "./pages/Product.jsx";

function App() {


  return (
    <div className='flex w-screen h-screen bg-gray-800'>

            <Routes>
                <Route path={"/"} element={<Home/>} ></Route>
                <Route path={"/cart"}
                       element={
                           <ProtectedRoute>
                               <Cart/>
                           </ProtectedRoute>
                } >

                </Route>
                <Route path={'login'} element={<Login/>}></Route>
                <Route path={'/product'} element={<Product/>}></Route>
            </Routes>


    </div>
  )
}

export default App
