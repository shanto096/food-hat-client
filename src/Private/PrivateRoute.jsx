import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthContextProvider";
import { useNavigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    if (user ) {
        return children
      }
        
      return navigate('/login')
    };


export default PrivateRoute;