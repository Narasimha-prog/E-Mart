import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const NavBar = () => {
  const { cartitems } = useCart();

  return (
    <>{/* Main Menu */}
    <div className="menu flex flex-wrap p-2 bg-black justify-between  ">
      {/* Title */}
      <Link to="/">
        <div className="title text-cyan-50 ml-3 text-lg sm:text-xs md:text-2xl">
          <h2 className='font-serif'>E-Mart</h2>
        </div>
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
      <div className="user text-cyan-100 flex items-center mr-3 space-x-2 sm:space-x-4 text-sm sm:text-base">
        <div className="userDetails whitespace-nowrap flex">
          <img  src='./assets/login.jpg' className='w-5 mx-2 sm:w-8' />
          <img src='./assets/sign-up.png' className='w-5 sm:w-8' />
        
        </div>
        <Link to="/cart">
          <div className="cart flex ">
            <span> <img src='./assets/cart.png' className='w-5 sm:w-8 ' /></span>
            <span className="ml-1 text-red-700 font-serif font-bold">({cartitems.length})</span>
          </div>
        </Link>
      </div>
    </div>
    
      {/* Submenu */}
      <div className="submenu">
        <ul className="flex flex-wrap justify-evenly bg-slate-300 p-3 text-sm sm:text-base *:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ">
          <Link to="/mobile">
            <li className="px-2 py-1 hover:text-cyan-700 font-semibold font-sans">Mobiles</li>
          </Link>
          <Link to="/computers">
            <li className="  hover:text-cyan-700 font-semibold font-sans">Computers</li>
          </Link>
          <Link to="/watch">
            <li className="px-2 py-1 hover:text-cyan-700 font-semibold font-sans">Watches</li>
          </Link>
          <Link to="/men">
            <li className="px-2 py-1 hover:text-cyan-700 font-semibold font-sans">Men Fashions</li>
          </Link>
          <Link to="/women">
            <li className="px-2 py-1 hover:text-cyan-700 font-semibold font-sans">Women Dressing</li>
          </Link>
          <Link to="/ac">
            <li className="px-2 py-1 hover:text-cyan-700 font-semibold font-sans">Ac</li>
          </Link>
          <Link to="/kit">
            <li className="px-2 py-1 hover:text-cyan-700 font-semibold font-sans">Kitchen</li>
          </Link>
          <Link to="/fun">
            <li className="px-2 py-1 hover:text-cyan-700 font-semibold font-sans">Furniture</li>
          </Link>
          <Link to="/tv">
            <li className="px-2 py-1 hover:text-cyan-700 font-semibold font-sans">TV</li>
          </Link>
          <Link to="/book">
            <li className="px-2 py-1 hover:text-cyan-700 font-semibold font-sans">Books</li>
          </Link>
          <Link to="/speak">
            <li className="px-2 py-1 hover:text-cyan-700 font-semibold font-sans">Speakers</li>
          </Link>
          <Link to="/fri">
            <li className="px-2 py-1 hover:text-cyan-700 font-semibold font-sans">Fridge</li>
          </Link>
          
        </ul>
      </div>
    </>
  );
};

export default NavBar;
