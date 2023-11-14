import PaymentHis from "./PaymentHis";
import usePayment from "./usePayment";


const PaymentHistory = () => {
    const [payment]=usePayment()
    console.log(payment);



    return ( <div className="ml-10 ">
    <div className="uppercase flex justify-evenly items-center h-[5rem]">
      <p>total order: {payment.length}</p>
      <p>total price: ${payment.price}</p>
    </div>
    <div className="border-[2px] rounded-md">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
          payment.map((item, index )=><PaymentHis key={item._id} index={index} item={item} ></PaymentHis>)
            }
             
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
};

export default PaymentHistory;