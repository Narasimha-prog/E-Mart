import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const menuItems = [
  { to: '/mobile', label: 'Mobiles' },
  { to: '/computers', label: 'Computers' },
  { to: '/watch', label: 'Watches' },
  { to: '/men', label: 'Men Fashions' },
  { to: '/women', label: 'Women Dressing' },
  { to: '/ac', label: 'Ac' },
  { to: '/kit', label: 'Kitchen' },
  { to: '/fun', label: 'Furniture' },
  { to: '/tv', label: 'TV' },
  { to: '/book', label: 'Books' },
  { to: '/speak', label: 'Speakers' },
  { to: '/fri', label: 'Fridge' },
];

const NavBar = () => {
  const { cartitems } = useCart();

  return (
    <>
      {/* Main Menu */}
      <div className="menu flex flex-wrap p-2 bg-black justify-between items-center">
        {/* Title */}
        <Link to="/" className="ml-3 text-cyan-50 text-lg sm:text-xs md:text-2xl font-serif">
          E-Mart
        </Link>

        {/* Search */}
        <div className="search flex-shrink mx-2">
          <input
            type="text"
            placeholder="Search"
            className="p-1 border rounded w-full sm:w-40 md:w-60 text-sm md:text-base"
          />
        </div>

        {/* User Details */}
        <div className="user text-cyan-100 flex items-center mr-3 space-x-4 text-sm sm:text-base">
          <div className="userDetails flex items-center space-x-2 cursor-pointer">
            <img src="./assets/login.jpg" className="w-5 sm:w-8 hover:scale-110 transition" alt="Login" />
            <img src="./assets/sign-up.png" className="w-5 sm:w-8 hover:scale-110 transition" alt="Sign Up" />
          </div>
          <Link to="/cart" className="cart flex items-center space-x-1 hover:scale-105 transition">
            <img src="./assets/cart.png" className="w-5 sm:w-8" alt="Cart" />
            <span className="text-red-700 font-serif font-bold">({cartitems.length})</span>
          </Link>
        </div>
      </div>

      {/* Submenu */}
      <nav className="submenu">
        <ul className="flex flex-wrap justify-evenly bg-slate-300 p-3 text-sm sm:text-base gap-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className="block px-3 py-1 font-semibold font-sans rounded-full 
                   text-gray-700 border border-transparent 
                   hover:bg-cyan-600 hover:text-white 
                   transition-all duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
