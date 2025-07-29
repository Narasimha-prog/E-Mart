import React, { useState } from 'react';
import { menData } from '../data/men';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

const MenPage = () => {
  // Extract unique brands from menData
  const uniqueBrands = [...new Set(menData.map((item) => item.brand))];
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (brand) => {
    setSelectedProduct((prevSelected) =>
      prevSelected.includes(brand)
        ? prevSelected.filter((item) => item !== brand)
        : [...prevSelected, brand]
    );
  };

  // Filter products based on selected brands
  const filteredProduct =
    selectedProduct.length === 0
      ? menData
      : menData.filter((item) => selectedProduct.includes(item.brand));

  return (
    <>
      <NavBar />
      <div className="flex items-start">
        {/* Sidebar for selecting brands */}
        <div className="max-w-sm sm:w-52 bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
          {uniqueBrands.map((brand) => (
            <div key={brand}>
              <label
               htmlFor={`checkbox-${brand}`} 
               className="flex cursor-pointer items-center space-x-2">
                <input
                  id={`checkbox-${brand}`}
                  type="checkbox"
                  checked={selectedProduct.includes(brand)}
                  onChange={() => companyHandler(brand)}
                  className='cursor-pointer'
                />
                <div className="font-sans font-medium truncate">{brand}</div>
              </label>
            </div>
          ))}
        </div>

        {/* Grid for filtered men products */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 m-10">
          {filteredProduct.map((item) => (
            <div 
            key={item.id}
            className="cursor-pointer border rounded-lg p-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Link to={`/men/${item.id}`}>
                <div className="pageImg">
                  <img
                    className=""
                    src={`.${item.image}`}
                    alt={item.model}
                  />
                </div>

                <div className="proMode">
                  {item.brand}, {item.model}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenPage;
