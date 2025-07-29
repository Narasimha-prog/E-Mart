import React, { useRef } from 'react'
import { mobileData } from "../data/mobiles"
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react' 

const Mobile = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const firstFiveMobiles = mobileData

  return (
    <div className="relative">
      <h2 className='proTitle font-semibold mb-4'>Mobiles</h2>

      {/* Arrow buttons */}
      <button 
        onClick={() => scroll('left')} 
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hover:scale-110 transition"
      >
        <ChevronLeft size={20}/>
      </button>

      <button 
        onClick={() => scroll('right')} 
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hover:scale-110 transition"
      >
        <ChevronRight size={20}/>
      </button>

      {/* Scrollable row */}
      <div 
        ref={scrollRef}
        className='proSection flex flex-nowrap gap-4 overflow-x-auto scroll-smooth scrollbar-none px-8'
      >
        {firstFiveMobiles.map((item) => (
          <Link key={item.id} to={`/mobile/${item.id}`}>
            <div className='imagBox
              w-28 h-36      
              sm:w-32 sm:h-40 
              md:w-40 md:h-48 
              lg:w-48 lg:h-56
              xl:w-56 xl:h-64 
              flex items-center justify-center 
              bg-white shadow rounded-lg
            '>
              <img 
                className='proImage transition-transform duration-300 hover:scale-110 max-w-full max-h-full object-contain' 
                src={`.${item.image}`} 
                alt={item.id} 
              /> 
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Mobile
