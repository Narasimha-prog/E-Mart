import React from 'react'
import {mobileData} from "../data/mobiles"
import { Link } from 'react-router-dom'
const Mobile = () => {
    const firstFiveMobiles=mobileData.slice(0,5)
  return (
    <>
    <h2 className='proTitle font-semibold'>Mobiles</h2>
    <div className='proSection  flex'>
      {
        firstFiveMobiles.map((item)=>{
            return(
              <Link key={item.id} to={`/mobile/${item.id}`}>
                <div className='imagBox'>
                  <img className='proImage transition-transform duration-300 hover:scale-110' src={item.image} alt={item.id} /> 
                </div>
                </Link>
              
        )
        })
        
      }
    </div>
    </>
  )
}

export default Mobile