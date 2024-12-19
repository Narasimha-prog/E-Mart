import React from 'react'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom'
const firstFivewoman=womanData.slice(0,5)
const Women=()=>{
    return (
      <>
      <h2 className='proTitle font-semibold' >Women Fashion Clothes</h2>
      <div className='proSection flex'>
        {
          firstFivewoman.map((item)=>{
              return(
                <Link key={item.id} to={`/women/${item.id}`}>
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

export default Women