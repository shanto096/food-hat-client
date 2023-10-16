import { useState } from "react";
import useMenu from "../../../useMenu/useMenu";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Carts from "../Carts/Carts";
import { useParams } from "react-router-dom";



const OrderItem = () => {
    const categories = ['pizza','dessert','salad','soup','drink']
    const {category} = useParams()
    const initialIndex =  categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  
  console.log(category);
  const pizza = menu.filter((m) => m.category === "pizza");
  const dessert = menu.filter((m) => m.category === "dessert");
  const salad = menu.filter((m) => m.category === "salad");
  const soup = menu.filter((m) => m.category === "soup");
  const drink = menu.filter((m) => m.category === "drinks");
 
  return (
    <div>
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList >
      
        <Tab>Pizza</Tab>
        <Tab>Dessert</Tab>
        <Tab>Salad</Tab>
        <Tab>Soup</Tab>
        <Tab>Drink</Tab>
      </TabList>
      
      <TabPanel><Carts menu={pizza}></Carts></TabPanel>
      <TabPanel><Carts menu={dessert}></Carts></TabPanel>
      <TabPanel><Carts menu={salad}></Carts></TabPanel>
      <TabPanel><Carts menu={soup}></Carts></TabPanel>
      <TabPanel><Carts menu={drink}></Carts></TabPanel>
      
    </Tabs>
    </div>
  );
};

export default OrderItem;
