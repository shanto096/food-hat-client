import Banner from "../Banner/Banner";
import ChefRecomded from "../ChefRecomded/ChefRecomded";
import ChefService from "../ChefService/ChefService";
import Feature from "../Feature/Feature";
import MenuOrder from "../MenuOrder/MenuOrder";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MenuOrder></MenuOrder>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <ChefRecomded></ChefRecomded>
            <Feature></Feature>
        </div>
    );
};

export default Home;