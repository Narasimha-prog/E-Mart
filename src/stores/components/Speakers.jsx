import React from 'react'
import { speakerData } from '../data/speaker'
import { Link } from 'react-router-dom'
const Speakers = () => {
    const firstFivespeaker=speakerData.slice(0,5)
    return (
      <>
      <h2 className='proTitle font-semibold' >Speakers</h2>
      <div className='proSection flex'>
        {
          firstFivespeaker.map((item)=>{
              return(
                <Link key={item.id} to={`/speak/${item.id}`}>
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

export default Speakers