import Swal from "sweetalert2";
import useCart from "../../Shared/uesCart/useCart";
import MyCart from "./MyCart";
import { Link } from "react-router-dom";

const MyCarts = () => {
  const [cart,refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);


  const handleToDelete = (item)=>{

    Swal.fire({
        title: 'Are you sure delete?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
         fetch(`http://localhost:5000/carts/${item._id}`,{
            method:'DELETE'

         })
         .then(res => res.json())
         .then(data =>{
            if (data.deletedCount>0) {
                refetch()
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
         })
        }
      })

}





  return (
    <div className="ml-10 ">
      <div className="uppercase flex justify-evenly items-center h-[5rem]">
        <p>total order: {cart.length}</p>
        <p>total price: ${total}</p>
        <Link to='/dashboard/payment'><button className="btn btn-warning">pay</button></Link>
      </div>
      <div className="border-[2px] rounded-md">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
            cart.map((item, index )=><MyCart key={item._id} index={index} item={item} handleToDelete={handleToDelete}></MyCart>)
              }
               
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCarts;
