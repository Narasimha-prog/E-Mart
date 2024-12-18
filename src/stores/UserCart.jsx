
import React from 'react'
import { useCart } from '../context/CartContext'
import NavBar from './components/NavBar' 


const UserCart = () => {

    const {cartitems,additem,removeFromCart} = useCart()
    console.log(cartitems);

  return (
<>
<NavBar />
<div>
    <h2 className='y-cart text-sm sm:text-lg text-center p-2 font-semibold'>Your Cart</h2>
 {cartitems.length ===0 ?
    <p className='empty font-semibold text-red-600 text-center'>Your Cart is Empty</p>:
   <div>
     {cartitems.map((item)=>{
        return(
            <div className='cart-section flex mt-10 ml-9 flex-wrap  '>
                <div className="cart-img sm:mr-16">
                    <img src={item.image} alt="" />
                </div>
                <div className="cart-details">
                    <h3 className='sm:text-lg md:text-xl  text-base font-semibold'>{item.product}</h3>
                    <h2  className="text-lg sm:text-base text-green-600">
                        {item.price}
                    </h2>
                    <h3>{item.model}</h3>
                    <button className='bg-orange-500 hover:bg-orange-600 active:bg-green-500 text-white font-bold  rounded transition duration-300 mt-4  sm:py-1 sm:px-2 sm:text-lg px-3 py-2' onClick={() => removeFromCart(item)}>Remove</button>
                </div>
                
            </div>
        )
    })}
   </div>

}
     
    </div>
</>
  )
}

export default UserCart