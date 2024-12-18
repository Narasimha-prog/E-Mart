import React from 'react'
import { menData } from '../data/men' 
import { Link } from 'react-router-dom'
const Men = () => {
    const firstFiveMen=menData.slice(0,5)
    return (
      <>
      <h2 className='proTitle font-semibold' >Mens fashion Clothing</h2>
      <div className='proSection flex'>
        {
          firstFiveMen.map((item)=>{
              return(
                <Link to={`/men/${item.id}`}>
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

export default Men