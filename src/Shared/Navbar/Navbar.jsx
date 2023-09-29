const Navbar = () => {

const navItem = <><li>
<a>Item 1</a>
</li>
<li>
<a>Parent</a>
</li>
<li>
<a>Item 3</a>
</li>
</>

  return (
    <section>
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
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
