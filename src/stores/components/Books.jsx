import React from 'react'
import { booksData } from '../data/books' 
import { Link } from 'react-router-dom'

const Books = () => {
    const firstFiveBooks=booksData.slice(0,5)
    return (
      <>
      <h2 className='proTitle font-semibold'>Books</h2>
      <div className='proSection flex justify-evenly'>
        {
          firstFiveBooks.map((item)=>{
              return(
                <Link key={item.id} to={`/book/${item.id}`}>
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
export default Books