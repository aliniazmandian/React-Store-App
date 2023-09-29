
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Layout from "./layout/Layout.jsx";

function App() {


  return (
    <div className='flex w-screen h-screen bg-gray-800'>
        <Layout>
            <Routes>
                <Route path={"/"} element={<Home/>} ></Route>
                <Route path={"/cart"} element={<Cart/>} ></Route>
            </Routes>
        </Layout>

    </div>
  )
}

export default App
