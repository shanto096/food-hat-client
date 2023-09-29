import Button from "../../../Component/Button/Button";
import CategoryHeader from "../../../Component/CategoryHeader/CategoryHeader";
import img from '../../../assets/Feature/featured.jpg'
import './Feature.css'
const Feature = () => {
    return (
        <div className="feature-img bg-fixed my-20 text-white ">
           <div className=" h-full bg-gradient-to-r from-black to-fuchsia-[]">
           <div className="pt-5">
                <CategoryHeader header={"FROM OUR MENU"} subHeader={'Check it out'}></CategoryHeader>
            </div>
            <div className="md:flex justify-center items-center md:px-40 md:pl-40 pl-5 py-14 ">
                <div>
                    <img className="w-11/12 rounded-md" src={img} alt="" />
                </div>
                <div className=" space-y-3">
                    <h3 className="text-xl font-bold">March 20, 2023</h3>
                    <h1 className="text-2xl font-bold">WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <div>
                        <Button name={'read more'}></Button>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Feature;