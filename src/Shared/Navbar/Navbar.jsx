import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Pages/Provider/AuthContextProvider";


const Navbar = () => {
   
 const {user, logOut} = useContext(AuthContext)
  const handleLogout = ()=>{
    logOut()
  }

const navItem = <><li>
<Link to ='/'>Home</Link>
</li>
<li>
<Link to ='/menu'>Menu</Link>
</li>
<li>
<Link to ='/order/pizza'>Order</Link>
</li>

{ user? <><li><button onClick={handleLogout}>logout</button></li></>:<><li><Link to ='/login'>Login</Link></li></>}

</>

  return (
    <section >
      <div className="navbar fixed bg-slate-600 opacity-60 text-white md:max-w-7xl z-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost  text-xl uppercase">food hat</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navItem}
          </ul>
        </div>
       {
        user? <> <div className="navbar-end">
        <div className="flex items-center mr-5">
          <div >
            <img className="w-[3rem] h-[3rem] rounded-full border-[3px]" src={user.photoURL} alt="" />
          </div>
          <p className="ml-2">{user.displayName}</p>
        </div>
      </div></>:null
       }
      </div>
    </section>
  );
};

export default Navbar;
