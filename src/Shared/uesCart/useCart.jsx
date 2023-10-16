import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../Pages/Provider/AuthContextProvider";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

// const token = localStorage.getItem('access-token')
const useCart = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure]=UseAxiosSecure()
     
    const { isLoading, refetch, data:cart=[] } = useQuery({
        queryKey: ['carts', user?.email],
        // queryFn:  async () => {
        //     const res= await fetch(`http://localhost:5000/carts?email=${user.email}`,{
        //         headers:{
        //             authorization:`bearer ${token}`
        //         }
        //     })
        //     return res.json()
        // }
        queryFn:  async () => {
            const res= await axiosSecure(`/carts?email=${user.email}`)
            return res.data;
        }
      })
      return [cart, refetch, isLoading]
};

export default useCart;