import Navbar from "../component/Navbar.jsx";


function Layout({children}) {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
}

export default Layout;