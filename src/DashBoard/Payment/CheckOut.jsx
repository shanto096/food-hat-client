import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../Pages/Provider/AuthContextProvider";
 import './Payment.css'

const CheckOut = ({price, cart}) => {
    //   stripe hooks...................
    const stripe = useStripe();
    const elements = useElements();
    const[cardError, SetCardError] = useState()
    const[transitionId, setTransitionId] = useState()
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    
    const {user}=useContext(AuthContext)

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ price }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, []);
    
    

//   submite stripe ............
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // console.log(card);

    const{error, paymentMethod}= await stripe.createPaymentMethod({
        type:'card',
        card
    })
    if (error) {
        SetCardError(error.message)
    }
    if (paymentMethod) {
        SetCardError('done')
    }
    setProcessing(true)

    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || 'no name',
              email:user?. email|| 'email no'
            },
          },
        },
      );
      if (confirmError) {
        console.log(confirmError);
        
      }
      setProcessing(false)
     if (paymentIntent.status === "succeeded") {
      setTransitionId(paymentIntent.id)

      const payment = {
        transitionId:paymentIntent.id,
        email:user?.email,
        price:price,
        quantity:cart.length,
        cartItemId:cart.map(id => id._id),
        menuItemId:cart.map(id => id.menuItemId),
        itemName:cart.map(n=>n.name),
        date: new Date()
        
     }

     fetch("http://localhost:5000/payment",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payment),
      })
      .then((res) => res.json())
       .then((data) =>{
        console.log(data);
       });
     

     }
};


    return (
        <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className="btn btn-primary btn-sm" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    {
        cardError && <p>{cardError}</p>
    }
    {
        transitionId && <p>{transitionId}</p>
    }
    </>
    );
};

export default CheckOut;