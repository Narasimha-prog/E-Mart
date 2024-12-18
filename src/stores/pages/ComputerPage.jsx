import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { computerData } from '../data/computers'
import { Link } from 'react-router-dom'


const ComputerPage = () => {
  const unique=[...new Set(computerData.map((item)=>item.company))]
  const [selectedProduct,setSelectedProduct] =useState([])
  const companyHandler=(apple)=>{
               if(selectedProduct.includes(apple))
               {
                     setSelectedProduct(selectedProduct.filter(item=>item !== apple))
               }else{
                   setSelectedProduct([...selectedProduct,apple])
               }
       
    }
    const filteredProduct = selectedProduct.length===0?
            computerData : computerData.filter((orange)=>selectedProduct.includes(orange.company))
    return (
        <>
        <NavBar/>
        <div className="flex">
                              <div className="border-2 border-stone-600 h-fit p-2">
                        
                              {unique.map((phone)=>{
                                return(
                                  <div >
                                     <label className='flex'>
                                         <input  type='checkbox' 
                                         checked={selectedProduct.includes(phone)}
                                         onChange={()=>companyHandler(phone)}
                                
                                         />
                                         <div className='font-semibold font-sans'>
                                         {phone}
                                         </div>
                                    </label>
                                  </div>
                                )
                               })}
                               </div>
        <div className="grid  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 2xl:grid-cols-6 gap-4 m-10">
          {filteredProduct.map((item)=>{
            return(
              <div>
               <Link to={`/computers/${item.id}`}>
                 <div className="pageImg">
                  <img className="transition-transform duration-300 hover:scale-110" src={item.image} alt=''/>
                 </div>
                
                 <div className="proModel">
                       {item.company},{item.model}
                    </div>
                       </Link>
                </div>
            )
          })}
        </div>
        </div>
        </>
      )
}

export default ComputerPage