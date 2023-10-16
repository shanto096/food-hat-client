
import { useContext } from 'react';
import { AuthContext } from '../Pages/Provider/AuthContextProvider';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from 'react-query';

const UseAdmin = () => {
   const {user} = useContext(AuthContext)
   const [axiosSecure]=UseAxiosSecure()
   const {data: isAdmin, isLoading: isAdminLoading}= useQuery({
    queryKey:['isAdmin' ,user?.email],
    queryFn: async()=>{
        const res = await axiosSecure.get(`/user/admin/${user?.email}`)
        return res.data.admin
    }
   })
   return[isAdmin, isAdminLoading]
};

export default UseAdmin;