import React from 'react';
import { useCart } from '../context/CartContext';
import NavBar from './components/NavBar';

const UserCart = () => {
  const { cartitems, removeFromCart } = useCart();

  return (
    <>
      <NavBar />
      <div>
        <h2 className="y-cart text-sm sm:text-lg text-center p-2 font-semibold">
          Your Cart
        </h2>
        {cartitems.length === 0 ? (
          <p className="empty font-semibold text-red-600 text-center">
            Your Cart is Empty
          </p>
        ) : (
          <div>
            {cartitems.map((item) => {
              const displayText =
                item.company || item.author || item.brand || 'Unknown';

              return (
                <div
                  key={item.id} // Add a unique key for each item
                  className="cart-section flex mt-10 ml-9 flex-wrap"
                >
                  {/* Image Section */}
                  <div className="cart-img sm:mr-16">
                    <img
                      src={item.image.startsWith('/') ? `.${item.image}` : item.image}
                      alt={`${displayText} image`}
                      className="object-contain w-32 h-32"
                    />
                    
                  </div>

                  {/* Details Section */}
                  <div className="cart-details">
                    <h3 className="sm:text-lg md:text-xl text-base font-semibold">
                      {displayText}
                    </h3>
                    <h2 className="text-lg sm:text-base text-green-600">
                      ${item.price}
                    </h2>
                    <h3>{item.model}</h3>

                    {/* Remove Button */}
                    <button
                      className="bg-orange-500 hover:bg-orange-600 active:bg-green-500 text-white font-bold rounded transition duration-300 mt-4 sm:py-1 sm:px-2 sm:text-lg px-3 py-2"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default UserCart;
