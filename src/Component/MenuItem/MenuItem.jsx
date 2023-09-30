

const MenuItem = ({ image, name, recipe, price}) => {
    return (
        <div>
            <div className="flex">
                <img style={{borderRadius:"0px 250px 250px 250px"}} className="w-1/5 " src={image} alt="" />
                <div className="ml-3">
                    <h1 className="uppercase text-xl ">{name}-------------</h1>
                    <p>{recipe}</p>
                </div>
              <p className="font-bold text-warning">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;