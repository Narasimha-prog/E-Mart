import React from 'react'
import { computerData } from '../data/computers'
import { Link } from 'react-router-dom'

const Computers = () => {
    const firstFiveCompurts=computerData.slice(0,5)
  return (
    <>
    <h2 className='proTitle font-semibold'>Computers</h2>
    <div className='proSection flex'>
      {
        firstFiveCompurts.map((item)=>{
            return(
             <Link to={`/computers/${item.id}`}>
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

export default Computers