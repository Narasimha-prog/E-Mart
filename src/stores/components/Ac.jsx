import React from 'react'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'
const Ac = () => {
    const firstFiveAc=acData.slice(0,5)
    return (
      <>
      <h2 className='proTitle font-semibold'>AC</h2>
      <div className='proSection flex flex-nowrap gap-4 overflow-x-auto scroll-smooth  scrollbar-none'>
        {
          firstFiveAc.map((item)=>{
              return(
                <Link key={item.id} to={`/ac/${item.id}`}>
                  <div 
                  className='imagBox
              w-28 h-36      
                sm:w-32 sm:h-40 
                md:w-40 md:h-48 
                flex items-center justify-center 
                bg-white shadow rounded-lg
            
            
                  
                  '>
                    <img className='proImage transition-transform duration-300 hover:scale-110' src={`.${item.image}`} alt={item.name} /> 
                  </div>
                  </Link>
          )
          })
          
        }
      </div>
      </>
    )
}

export default Ac