import { useQuery } from "react-query";
import User from "./User";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";


const Users = () => {
  const [axiosSecure]=UseAxiosSecure()
    const {data: user =[], refetch}= useQuery(['user'],async()=>{
        const res = await axiosSecure.get('/users')
        return res.data()
    })
   const handleMakeAdmin= (id) => {
     fetch(`http://localhost:5000/users/admin/${id}`,{
        method:'PATCH'

     })
     .then(res=> res.json())
     .then(data =>{
        refetch()
        console.log(data);
     })
   }

    const handleToDelete = (id)=>{
           fetch(`http://localhost:5000/users/${id}`,{
            method:"DELETE"
           })
           .then(res=>res.json())
           .then(data=>{
            refetch()
            console.log(data);
           })
    }
    


    return (
        <div className="ml-10 ">
        <div className="uppercase flex items-center h-[5rem]">
          <p>total User: {user.length}</p>
          
        </div>
        <div className="border-[2px] rounded-md">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>SL</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
              user.map((user, index )=><User key={user._id} index={index} user={user} handleMakeAdmin={handleMakeAdmin} handleToDelete={handleToDelete}></User>)
                }
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default Users;