import { FaTrashAlt } from "react-icons/fa";


const MyCart = ({index, item, handleToDelete}) => {
    

    const {  image, name,  price} = item

   


    return (
        
            <tr>
                <td>
                   {index +1}
                </td>
                <td>
                 
                    <div className="">
                      <div className="  w-12 h-12">
                        <img className="rounded-md"
                          src={image}
                          alt=""
                        />
                      </div>
                    </div>
                 
                </td>
                <td>
                  {name}
                </td>
                <td>{price}</td>
                <th>
                  <button onClick={()=>handleToDelete(item)} className="btn btn-ghost btn-lg text-white bg-red-400"><FaTrashAlt></FaTrashAlt></button>
                </th>
              </tr>
       
    );
};

export default MyCart;