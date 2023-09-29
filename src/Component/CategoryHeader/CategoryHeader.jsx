

const CategoryHeader = ({subHeader,header}) => {
    return (
        <div className=" flex justify-center  my-8">
            <div>
            <h2 className="text-yellow-400 mb-2" >--- {subHeader} ---</h2>
            <h2 className="text-3xl  text-center border-y-4 py-2 w-">{header}</h2>
            </div>
        </div>
    );
};

export default CategoryHeader;