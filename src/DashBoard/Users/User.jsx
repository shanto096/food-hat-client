import { FaTrashAlt, FaUserAltSlash } from "react-icons/fa";


const User = ({index, user, handleToDelete,handleMakeAdmin}) => {
    const {name, email} = user;

   


    return (
        
            <tr>
                <td>
                   {index +1}
                </td>
            
                <td>
                  {name}
                </td>
                <td>{email}</td>
                <td>
                    {
                        user.role === 'admin'? 'admin':<span onClick={()=>handleMakeAdmin(user._id)}><FaUserAltSlash size={20}></FaUserAltSlash></span> 
                    }
                    
                </td>
                <th>
                  <button onClick={()=>handleToDelete(user._id)} className="btn btn-ghost btn-lg text-white bg-red-400"><FaTrashAlt></FaTrashAlt></button>
                </th>
              </tr>
       
    );
};

export default User;