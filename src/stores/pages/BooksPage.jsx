import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { booksData } from '../data/books';
import { Link } from 'react-router-dom';

const BooksPage = () => {
  // Extract unique categories from booksData
  const uniqueCategories = [...new Set(booksData.map((book) => book.category))];
  
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (category) => {
    setSelectedProduct((prevSelected) => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter((item) => item !== category);
      } else {
        return [...prevSelected, category];
      }
    });
  };

  // Filter books based on selected categories
  const filteredProduct =
    selectedProduct.length === 0
      ? booksData
      : booksData.filter((book) => selectedProduct.includes(book.category));

  return (
    <>
      <NavBar />
      <div className="flex items-start">
        {/* Categories Filter */}
        <div className="max-w-sm sm:w-52 bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm sticky top-20 md:w-auto">
          {uniqueCategories.map((category) => (
            <div key={category}>
              <label
                htmlFor={`checkbox-${category}`} 
                 className="flex cursor-pointer items-center space-x-2">
                <input
                  id={`checkbox-${category}`}
                  type="checkbox"
                  checked={selectedProduct.includes(category)}
                  onChange={() => companyHandler(category)}
                   className="cursor-pointer"
                />
                <div className="font-sans font-medium truncate">{category}</div>
              </label>
            </div>
          ))}
        </div>

        {/* Filtered Products */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 m-10">
          {filteredProduct.length === 0 ? (
            <div>No books available for the selected categories.</div>
          ) : (
            filteredProduct.map((item) => (
              <div key={item.id}
              className=""
              >
                
                <Link to={`/book/${item.id}`}>
                  <div className="pageImg">
                    <img
                      className=" "
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="proModel">
                    {item.title}, {item.author}
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default BooksPage;
