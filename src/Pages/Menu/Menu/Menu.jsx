

import MenuCategory from '../../../Component/MenuCategory/MenuCategory';
import coverImg from '../../../assets/Menu/banner3.jpg'
import pizzaImg from '../../../assets/Menu/pizza-bg.jpg'
import dessertImg from '../../../assets/Menu/dessert-bg.jpeg'
import saladImg from '../../../assets/Menu/soup-bg.jpg'
import soupImg from '../../../assets/Menu/salad-bg.jpg'
import useMenu from '../../../useMenu/useMenu';

import Cover from '../Cover/Cover'
import CategoryHeader from '../../../Component/CategoryHeader/CategoryHeader';




const Menu = () => {
     const [menu]= useMenu()
     const pizza = menu.filter(m => m.category === 'pizza')
     const dessert = menu.filter(m => m.category === 'dessert')
     const salad = menu.filter(m => m.category === 'salad')
     const soup = menu.filter(m => m.category === 'soup')
     const offer = menu.filter(m => m.category === 'offered')
    return (
        <div>
            {/* menu cover  */}
            <Cover coverImg={coverImg} title={'Our menu'}></Cover>
            {/* TodayOffer................... */}
            <CategoryHeader header={`TODAY'S OFFER`} subHeader={`Don't miss`}></CategoryHeader>
            <MenuCategory menu={offer} ></MenuCategory>
            {/* Dessert item .................. */}
            <Cover coverImg={dessertImg} title={'desserts'}></Cover>
            <MenuCategory menu={dessert} ></MenuCategory>
            {/* pizza item................... */}
            <Cover coverImg={pizzaImg} title={'pizza'}></Cover>
            <MenuCategory menu={pizza} ></MenuCategory>
            {/* salads item.................... */}
            <Cover coverImg={soupImg} title={'salads'}></Cover>
            <MenuCategory menu={salad} ></MenuCategory>
            {/* soups item.................... */}
            <Cover coverImg={saladImg} title={'soups'}></Cover>
            <MenuCategory menu={soup} ></MenuCategory>
        </div>
    );
};

export default Menu;