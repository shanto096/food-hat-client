import Cover from "../../Menu/Cover/Cover";
import OrderItem from "../OrderItem/OrderItem";
import orderImg from '../../../assets/Order/banner2.jpg'

const Order = () => {
    return (
        <div>
            <Cover coverImg={orderImg} title={'order'}></Cover>
            <OrderItem></OrderItem>
        </div>
    );
};

export default Order;