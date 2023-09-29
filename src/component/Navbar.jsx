import {Link, NavLink} from "react-router-dom";


function Navbar() {
    return (
        <header> 
            <nav>
                <ul>
                    <li> <NavLink to={"/"}> HOME </NavLink> </li>
                    <li> <NavLink to={"/cart"}> CART </NavLink> </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;