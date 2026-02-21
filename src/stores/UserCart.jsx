import React from "react";
import { useCart } from "../context/CartContext";
import NavBar from "./components/NavBar";

const UserCart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <>
      <NavBar />
      <div>
        <h2 className="y-cart text-sm sm:text-lg text-center p-2 font-semibold">
          Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <p className="empty font-semibold text-red-600 text-center">
            Your Cart is Empty
          </p>
        ) : (
          <div>
            {cartItems.map((item) => {
              const displayText =
                item.company || item.author || item.brand || "Unknown";

              return (
                <div
                  key={item.id} // Add a unique key for each item
                  className="cart-section flex mt-10 ml-9 flex-wrap"
                >
                  {/* Image Section */}
                  <div className="cart-img sm:mr-16">
                    <img
                      src={
                        item.image.startsWith("/")
                          ? `.${item.image}`
                          : item.image
                      }
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
                    <div className="flex items-center gap-4 mt-4">
                      {/* Decrease Button */}
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-gray-300 px-3 py-1 rounded font-bold text-lg"
                      >
                        -
                      </button>

                      {/* Quantity */}
                      <span className="text-lg font-semibold">
                        {item.quantity}
                      </span>

                      {/* Increase Button */}
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-gray-300 px-3 py-1 rounded font-bold text-lg"
                      >
                        +
                      </button>

                      {/* Remove Completely */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <h2 className="text-center font-bold text-xl mt-6 text-green-400">
  Total: ${totalPrice}
</h2>
      </div>
    </>
  );
};

export default UserCart;
