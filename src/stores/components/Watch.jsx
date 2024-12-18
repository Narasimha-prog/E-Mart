import React from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'
const Watch = () => {
    const firstFivewatch=watchData .slice(0,5)
    return (
      <>
      <h2 className='proTitle font-semibold' >Watch</h2>
      <div className='proSection flex'>
        {
          firstFivewatch.map((item)=>{
              return(
                <Link key={item.id} to={`/watch/${item.id}`}>
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

export default Watch