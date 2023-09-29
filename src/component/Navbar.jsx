import {Link, NavLink} from "react-router-dom";


function Navbar() {
    return (
        <header> 
            <nav>
                <ul className={'flex justify-center items-center h-[50px] w-screen bg-blue-400'} >
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
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;