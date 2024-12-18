import React, { createContext, useContext, useState } from 'react'


   const CartContext= createContext()

   export const CartProvider = ({children})=>{
        const[cartitems,setCartitems] =useState([])

        const additem=(item)=>{
             setCartitems([...cartitems,item])
        }

        const removeFromCart=(apple)=>{
            setCartitems(cartitems.filter((item)=>apple!==item))
        }

        return(
             <CartContext.Provider value={{cartitems,additem,removeFromCart}}>
                  {children}
             </CartContext.Provider>
        )
    }
    
   export const useCart=()=>{
        return useContext(CartContext)
    }
  