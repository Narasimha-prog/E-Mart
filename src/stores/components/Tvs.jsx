import React from 'react'
import { tvData } from '../data/tv'
import { Link } from 'react-router-dom'

const Tvs = () => {
  const firstFiveTv=tvData.slice(0,5)
  return (
    <>
    <h2 className='proTitle font-semibold' >TV</h2>
    <div className='proSection flex'>
      {
        firstFiveTv.map((item)=>{
            return(
              <Link to={`/tv/${item.id}`}>
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

export default Tvs

