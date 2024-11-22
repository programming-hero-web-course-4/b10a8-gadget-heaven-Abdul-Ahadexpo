import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaCartPlus, FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-24 p-2 shadow gap-2 border-r border-l border-t border-b border-gray-500"
          >
            <Link to="/"> Home</Link>
            <Link to="/products">Statistic</Link>
            <Link to="/dash">Dashboard</Link>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl lg:text-2xl">✨ Gadget Heaven ✨</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium gap-8">
          <Link to="/">Home</Link>
          <Link to="/Products">Products</Link>
          <Link to="/Dashboard">Dashboard</Link>
        </ul>
      </div>
      <div className="navbar-end text-black">
        <FaCartPlus className="mr-6 cursor-pointer" />
        <FaHeart className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
