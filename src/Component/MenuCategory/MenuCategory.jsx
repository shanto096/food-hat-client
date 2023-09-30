import Button from "../Button/Button";
import MenuItem from "../MenuItem/MenuItem";


const MenuCategory = ({menu}) => {
    return (
        <div>
             <div className="grid md:grid-cols-2 gap-10 md:mx-0 mx-2 my-10">
               {
                menu.map(m => <MenuItem key={m._id} image={m.image} name={m.name} recipe={m.recipe} price={m.price}> </MenuItem>)
               }
            </div>
            <div className="block text-center mb-10">
               <Button name={"ORDER YOUR FAVOURITE FOOD"}></Button>
            </div>
        </div>
    );
};

export default MenuCategory;