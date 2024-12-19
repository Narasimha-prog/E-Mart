import React from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import NavBar from '../stores/components/NavBar.jsx'
import { acData } from '../stores/data/ac.js'
const AcSinglePage = () => {
    const {id}=useParams()
    const { cartitems, additem } = useCart();       
        const product=acData.find((item)=>item.id===id)
  return (
    <>
       <NavBar/>
       <div className="ind-Page flex mt-10 ml-9 flex-wrap ">
  <div className="ind-imge sm:mr-16">
    <img src={`.${product.image}`} alt="mobile-img" className="max-w-full h-auto" />
  </div>
  <div className="in-details mt-10  text-sm">
    {/* Company */}
    <div className="ind-company">
      <h3 className="sm:text-lg md:text-xl  text-base font-medium">{product.company}</h3>
    </div>
    {/* Model */}
    <div className="in-model">
      <h3 className=" text-base">{product.model}</h3>
    </div>
    {/* Price */}
    <div className="ind-price">
      <h3 className="text-lg sm:text-base text-green-600">₹ {product.price}</h3>
    </div>
    {/* Description */}
    <div className="ind-desc mt-2">
      <p className="text-base sm:text-sm text-gray-700">{product.description}</p>
    </div>
    {/* Add to Cart Button */}
    <button
      className="bg-orange-500 hover:bg-orange-600 active:bg-green-500 text-white font-bold  rounded transition duration-300 mt-4  sm:py- sm:px-2 sm:text-lg px-3 py-2"
      onClick={() => {
        additem(product);
        
      }}
    >
      Add to Cart
    </button>
  </div>
</div>

    </>
  )
}

export default AcSinglePage