import React from 'react'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'
const Ac = () => {
    const firstFiveAc=acData.slice(0,5)
    return (
      <>
      <h2 className='proTitle font-semibold'>AC</h2>
      <div className='proSection flex'>
        {
          firstFiveAc.map((item)=>{
              return(
                <Link key={item.id} to={`/ac/${item.id}`}>
                  <div className='imagBox'>
                    <img className='proImage transition-transform duration-300 hover:scale-110' src={item.image} alt={item.name} /> 
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