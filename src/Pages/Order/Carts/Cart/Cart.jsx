import { useContext } from "react";
import Button from "../../../../Component/Button/Button";
import { AuthContext } from "../../../Provider/AuthContextProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../../../../Shared/uesCart/useCart";

const Cart = ({item}) => {
  const [,refetch]=useCart()
    const {  image, name, recipe, price} = item
    const {user}= useContext(AuthContext)
    const navigate = useNavigate()
    
  const handleToAddCart = (item)=>{
    // console.log(item);
    const orderItem = {menuItemId:item._id, image, name, recipe, price ,email: user.email}
    if (user && user.email) {
       fetch('http://localhost:5000/carts',{
          method:'POST',
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(orderItem)
       })
       .then(res=>res.json())
       .then(data =>{
         if (data.insertedId) {
          refetch()
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
         }
       })
    }
    else{
      Swal.fire({
        title: 'Tumi ki login korte chau',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Login!'
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login')
        }
      })
    }
  }

  return (
    <div>
      <div className="card w-96 border-2 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl " />
        </figure>
        <p className="absolute right-16 top-14 bg-black text-white font-bold px-4 p-1 rounded-md">${price}</p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
          <span onClick={() => handleToAddCart(item)} > <Button   name={"add to cart"}></Button></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
