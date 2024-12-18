import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

const MobilePage = () => {

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
          mobileData : mobileData.filter((orange)=>selectedProduct.includes(orange.company))
  return (
    <>
    <NavBar/>
    <div className="flex">
      <div className="border-2 border-stone-600 h-fit p-2">

       {mobileData.map((phone)=>{
        return(
          <div >
             <label className='flex'>
                 <input  type='checkbox' 
                 checked={selectedProduct.includes(phone.company)}
                 onChange={()=>companyHandler(phone.company)}
                 />
                 <div className='font-sans font-semibold'>
                 {phone.company}
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
            <Link to={`/mobile/${item.id}`}>
             <div className="pageImg">
              <img className="transition-transform duration-300 hover:scale-110" src={item.image} alt=''/>
             </div>
             
             <div className="proMode">
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

export default MobilePage