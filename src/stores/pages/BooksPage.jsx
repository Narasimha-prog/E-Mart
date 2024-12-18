import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { booksData } from '../data/books';
import { Link } from 'react-router-dom';

const BooksPage = () => {
  // Extract unique categories from booksData
  const uniqueCategories = [...new Set(booksData.map((book) => book.category))];
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (category) => {
    if (selectedProduct.includes(category)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== category));
    } else {
      setSelectedProduct([...selectedProduct, category]);
    }
  };

  // Filter books based on selected categories
  const filteredProduct =
    selectedProduct.length === 0
      ? booksData
      : booksData.filter((book) => selectedProduct.includes(book.category));

  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="border-2 border-stone-600 h-fit p-2">
          {uniqueCategories.map((category) => 
          {
            return(
            <div  key={category}>
              <label className='flex'>
                <input
                  id={`checkbox-${category}`}
                  type="checkbox"
                  checked={selectedProduct.includes(category)}
                  onChange={() => companyHandler(category)}
                />
                <div className='font-sans font-semibold'>
                {category}
                </div>
              </label>
            </div>
            )
})}
        </div>
        <div className="grid  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 2xl:grid-cols-6 gap-4 m-10">
          {filteredProduct.map((item) =>{
          return (
            
            <div>
                  <Link to={`/book/${item.id}`}>
                 <div className="pageImg">
                  <img className="transition-transform duration-300 hover:scale-110" src={item.image} alt=''/>
                 </div>
                 
              <div className="">
                {item.title}, {item.author}
              </div>
              </Link>
            </div>
          )
          })}
        </div>
      </div>
    </>
  )
}

export default BooksPage
