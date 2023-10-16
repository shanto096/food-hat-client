import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const UseAxiosSecure = () => {
  const {logOut} = useContext(AuthContext);
  const navigate = useNavigate();



  const   axiosSecure = axios.create({
        baseURL:'http://localhost:5000'
  });



 useEffect(()=>{
    axiosSecure.interceptors.request.use( (config) =>{
        const token = localStorage.getItem('access-token')
        if (token) {
            config.headers.authorization = `bearer ${token}`
        }
        return config
      })
      axiosSecure.interceptors.response.use( (response) =>{
        response, async(error)=>{
            if (error.response && (error.response.status === 401 || error.response.status === 403 )) {
                await logOut()
                navigate('/login')
            }
            return Promise.reject(error);
        };
        return response;
      } ) 
 }, [logOut, navigate, axiosSecure]);



  return [axiosSecure]
};

export default UseAxiosSecure;
