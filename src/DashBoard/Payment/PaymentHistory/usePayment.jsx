import { useContext } from "react";
import { AuthContext } from "../../../Pages/Provider/AuthContextProvider";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useQuery } from "react-query";


const usePayment = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure]=UseAxiosSecure()
     
    const { isLoading, refetch, data:payment=[] } = useQuery({
        queryKey: ['payment', user?.email],
        // queryFn:  async () => {
        //     const res= await fetch(`http://localhost:5000/carts?email=${user.email}`,{
        //         headers:{
        //             authorization:`bearer ${token}`
        //         }
        //     })
        //     return res.json()
        // }
        queryFn:  async () => {
            const res= await axiosSecure(`/payment?email=${user.email}`)
            return res.data;
        }
      })
      return [payment, refetch, isLoading]
};

export default usePayment;