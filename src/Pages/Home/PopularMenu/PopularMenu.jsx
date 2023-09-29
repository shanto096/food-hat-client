import { useEffect, useState } from "react";
import Button from "../../../Component/Button/Button";
import CategoryHeader from "../../../Component/CategoryHeader/CategoryHeader";
import MenuItem from "../../../Component/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])


    useEffect(()=>{
        fetch('../../../../public/menu.json')
        .then(res=>res.json())
        .then(data=> {
            const popular = data.filter(p => p.category ==='popular' )
            setMenu(popular)
        })
           
    },[])
    return (
        <div>
            <CategoryHeader subHeader={'Check it out'} header={'FROM OUR MENU'}></CategoryHeader>
            <div className="grid md:grid-cols-2 gap-10 my-10">
               {
                menu.map(m => <MenuItem key={m._id} image={m.image} name={m.name} recipe={m.recipe} price={m.price}> </MenuItem>)
               }
            </div>
            <div className="block text-center mb-10">
               <Button name={"View Full  Menu"}></Button>
            </div>
            <div className="bg-black p-10 my-10 rounded-md">
                <h1 className="text-center text-3xl font-bold text-white">Call Us: <span className="text-green-500">01321068459</span></h1>
            </div>
            
        </div>
    );
};

export default PopularMenu;