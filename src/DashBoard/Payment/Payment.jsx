import { Elements } from "@stripe/react-stripe-js";
import CategoryHeader from "../../Component/CategoryHeader/CategoryHeader";
import CheckOut from "./CheckOut";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../Shared/uesCart/useCart";


const stripePromise = loadStripe("pk_test_51OBh4tAME8VR4WS7paK1iOIlPgvsOiwAMTrZiWyAR18XynIcMkE7tsC28PzTV42nI0G5lcfGVNVaO3awqdU7etZo00s1N40W3P ")

const Payment = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const price = parseInt(total.toFixed(2))
    return (
        <>
        <div>
           <CategoryHeader subHeader={'Please payment'} header={"Payment"}></CategoryHeader>
        </div>
        <Elements stripe={stripePromise}>
            <CheckOut cart={cart} price={price} ></CheckOut>
        </Elements>
        </>
    );
};

export default Payment;