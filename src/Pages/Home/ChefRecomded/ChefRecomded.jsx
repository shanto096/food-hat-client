import Button from "../../../Component/Button/Button";
import CategoryHeader from "../../../Component/CategoryHeader/CategoryHeader";
import img from '../../../assets/Chef/banner2.jpg'

const ChefRecomded = () => {
    return (
        <>
        <div>
            <CategoryHeader header={'TESTIMONIALS'} subHeader={'What Our Clients Say'}></CategoryHeader>
        </div>
       <div className=" my-10 md:flex gap-10 justify-center">
       <div className="card w-96 border-2 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <Button name={'add to cart'}></Button>
          </div>
        </div>
      </div>

      <div className="card w-96 border-2 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <Button name={'add to cart'}></Button>
          </div>
        </div>
      </div>

      <div className="card w-96 border-2 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <Button name={'add to cart'}></Button>
          </div>
        </div>
      </div>
       </div>
      </>
    );
};

export default ChefRecomded;