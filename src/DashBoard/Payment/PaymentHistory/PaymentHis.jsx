

const PaymentHis = ({item,index}) =>{
    

    const {email, price} = item

   


    return (
        
            <tr>
                <td>
                   {index +1}
                </td>
                <td>
                 
                    <div className="">
                      <div className="  w-12 h-12">
                        {email}
                      </div>
                    </div>
                 
                </td>
                <td>
                  {"ami"}
                </td>
                <td>{price}</td>
                <th>
                  <button className="btn btn-ghost btn-lg text-white bg-red-400">ac</button>
                </th>
              </tr>
       
    );
};

export default PaymentHis;