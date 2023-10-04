import Button from "../../../../Component/Button/Button";

const Cart = ({item}) => {
    const { image, name, recipe, price} = item
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
            <Button name={"add to cart"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
