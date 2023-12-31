import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {logout} from "../Features/Login/loginSlice.js";


function Navbar() {

    const cart= useSelector((state)=>state.cart.value)
    const [totalCartQuantity,setTotalCartQuantity] = useState()
    const navigate =useNavigate()
    const isAuthenticated = useSelector((state)=>state.login.value.authenticated)
    const dispatch = useDispatch()

    const loginHandler=()=>{
        navigate('/login')
    }

    const logoutHandler=()=>{
        dispatch(logout())
        navigate('/login')
    }

    useEffect(()=>{
        // console.log(isAuthenticated)
    },[isAuthenticated])



    useEffect(()=>{
        if (cart){
            let total = cart?.reduce((a,b)=> {
                return   a + b.quantity
            },0 )
            setTotalCartQuantity(total)
        }


    },[cart])

    return (
        <header className={'sticky top-0 '}>

            <nav>
                <ul className={'flex justify-center items-center h-[50px] w-screen bg-blue-400'} >
                    <div className={'relative  text-amber-50'}>

                        <div
                            className={'absolute bg-red-600 flex justify-center items-center left-[-25px] top-[-40%] p-1 rounded-[50%] w-[25px] h-[25px] text-center '}
                        >
                            {totalCartQuantity}
                        </div>
                        Total cart
                    </div>
                    <li className={' p-1 m-1 hover:bg-amber-50  rounded  transition-all'} >
                        <NavLink className={({isActive})=> isActive ? 'bg-amber-50 p-1 m-1 rounded ' :'p-1 m-1' } to={"/"}>
                            HOME
                        </NavLink>
                    </li>
                    <li className={'p-1 m-1 hover:bg-amber-50 rounded transition-all'}>
                        <NavLink className={({isActive})=> isActive ? 'bg-amber-50 p-1 m-1 rounded' :'p-1 m-1'  } to={"/cart"}>
                            CART
                        </NavLink>
                    </li>

                    {isAuthenticated ?
                        <li onClick={()=>logoutHandler()} className={'p-1 m-1 cursor-pointer hover:bg-amber-50 rounded transition-all'}>
                            Logout
                        </li>
                        :
                        <li onClick={()=>loginHandler()} className={'p-1 m-1 cursor-pointer hover:bg-amber-50 rounded transition-all'}>
                            Login
                        </li>
                    }


                </ul>
            </nav>
        </header>
    );
}

export default Navbar;