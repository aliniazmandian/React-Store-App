import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";


// eslint-disable-next-line
function ProtectedRoute({children}) {

    const navigate = useNavigate()
    const isAuthenticated = useSelector(state => state.login.value.authenticated)

    useEffect(()=>{
        if (!isAuthenticated) navigate('/login')
    },[navigate])

    return isAuthenticated ? children : null

}

export default ProtectedRoute;