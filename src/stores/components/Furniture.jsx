import React from 'react'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'
const Furniture = () => {
    const firstFiveFurniture=furnitureData.slice(0,5)
    return (
      <>
      <h2 className='proTitle font-semibold'>Furniture</h2>
      <div className='proSection flex'>
        {
          firstFiveFurniture.map((item)=>{
              return(
                <Link key={item.id} to={`/fun/${item.id}`}>
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

export default Furniture