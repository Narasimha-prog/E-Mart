import React from 'react'
import { fridgeData } from '../data/fridge' 
import { Link } from 'react-router-dom'
const Fridges = () => {
    const firstFiveFridge=fridgeData.slice(0,5)
    return (
      <>
      <h2 className='proTitle font-semibold'>Fridge</h2>
      <div className='proSection flex'>
        {
          firstFiveFridge.map((item)=>{
              return(
                <Link to={`/fri/${item.id}`}>
                  <div className='imagBox'>
                    <img className='proImage transition-transform duration-300 hover:scale-110' src={item.image} alt="" /> 
                  </div>
                  </Link>
          )
          })
          
        }
      </div>
       </>
    )
}

export default Fridges