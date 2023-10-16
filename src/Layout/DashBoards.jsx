import { FaCalendar, FaHome, FaShoppingCart, FaStar, FaUser, FaWallet,} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCart from "../Shared/uesCart/useCart";
import UseAdmin from "../Hooks/UseAdmin";


const DashBoards = () => {
    const [cart] = useCart()

    // const isAdmin = true;
    const [isAdmin] =UseAdmin()
    return (
        <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox"  className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ">
            <Outlet></Outlet>
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            { isAdmin? <>
            <li><Link><FaHome></FaHome> Admin Home</Link></li>
            <li><Link><FaCalendar></FaCalendar> Add Items</Link></li>
            <li><Link><FaWallet></FaWallet> Manage Items</Link></li>
            <li><Link><FaStar></FaStar>Manage Booking</Link></li>
             <li><Link to='/dashboard/user'><FaUser></FaUser> AllUser</Link></li>
            </>:
             <>
             <li><Link><FaHome></FaHome> User Home</Link></li>
            <li><Link><FaCalendar></FaCalendar> Reservation</Link></li>
            <li><Link><FaWallet></FaWallet> Payment History</Link></li>
            <li><Link to='/dashboard/myCart'> <FaShoppingCart size={20}></FaShoppingCart> My Cart <span className="badge badge-secondary">+{cart?.length || 0}</span> </Link></li>
            <li><Link><FaStar></FaStar> Add Review</Link></li>
             <li><Link><FaHome></FaHome> My Booking</Link></li>
            </>

            }
            
            <div className="divider"></div>
            <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu"> Menu</Link>
      </li>
      <li>
        <Link to="/order/pizza"> Order</Link>
      </li>
       <li>
       <Link to="/order/pizza"> Shop</Link>
       </li>
            
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoards;