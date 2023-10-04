
import { Link } from "react-router-dom";
import Button from "../../../Component/Button/Button";
import CategoryHeader from "../../../Component/CategoryHeader/CategoryHeader";
import MenuItem from "../../../Component/MenuItem/MenuItem";
import useMenu from "../../../useMenu/useMenu";


const PopularMenu = () => {
    const [menu]= useMenu()
    const popular = menu.filter(p => p.category ==='popular' )


    return (
        <div>
            <CategoryHeader subHeader={'Check it out'} header={'FROM OUR MENU'}></CategoryHeader>
            <div className="grid md:grid-cols-2 gap-10 my-10">
               {
               popular.map(m => <MenuItem key={m._id} image={m.image} name={m.name} recipe={m.recipe} price={m.price}> </MenuItem>)
               }
            </div>
            <div className="block text-center mb-10"> 
               <Link to='/menu'><Button name={"View Full  Menu"}></Button></Link>
            </div>
            <div className="bg-black p-10 my-10 rounded-md">
                <h1 className="text-center text-3xl font-bold text-white">Call Us: <span className="text-green-500">01321068459</span></h1>
            </div>
            
        </div>
    );
};

export default PopularMenu;