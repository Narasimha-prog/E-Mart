import React from 'react'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom'
const Kitechen = () => {
    const firstFiveKitchen=kitchenData.slice(0,5)
    return (
      <>
      <h2 className='proTitle font-semibold'>Kitchen</h2>
      <div className='proSection flex'>
        {
          firstFiveKitchen.map((item)=>{
              return(
                <Link key={item.id} to={`/kit/${item.id}`}>
                  <div className='imagBox'>
                    <img className='proImage transition-transform duration-300 hover:scale-110' src={`.${item.image}`} alt={item.id} /> 
                  </div>
                  </Link>
          )
          })
          
        }
      </div>
       </>
    )
}

export default Kitechen