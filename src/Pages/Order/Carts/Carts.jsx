import Cart from "./Cart/Cart";


const Carts = ({menu}) => {
    
    return (
        <div className="grid md:grid-cols-3 gap-8 my-10 md:ml-8">
            {
               menu.map(m => <Cart key={m._id} item={m}></Cart>)
            }
        </div>
    );
};

export default Carts;