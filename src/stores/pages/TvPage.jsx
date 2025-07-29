import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { tvData } from '../data/tv';
import { Link } from 'react-router-dom';

const TvPage = () => {
  const uniqueBrands = [...new Set(tvData.map((item) => item.brand))]; // Get unique brands
  const [selectedProduct, setSelectedProduct] = useState([]);

  // Handler to toggle brand selection
  const companyHandler = (brand) => {
    setSelectedProduct((prevSelected) =>
      prevSelected.includes(brand)
        ? prevSelected.filter((item) => item !== brand)
        : [...prevSelected, brand]
    );
  };

  // Filter tvs based on selected brands
  const filteredProduct =
    selectedProduct.length === 0
      ? tvData
      : tvData.filter((item) => selectedProduct.includes(item.brand));

  return (
    <>
      <NavBar />
      <div className="flex items-start">
        {/* Sidebar for selecting brands */}
        <div className="max-w-sm sm:w-52 bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
          {uniqueBrands.map((brand) => (
            <div key={brand}>
              <label c htmlFor={`checkbox-${brand}`} 
             className="flex cursor-pointer items-center space-x-2">
                <input
                   id={`checkbox-${brand}`}
                  type="checkbox"
                  checked={selectedProduct.includes(brand)}
                  onChange={() => companyHandler(brand)}
                   className="cursor-pointer"
                />
                <div className="font-sans font-medium truncate">{brand}</div>
              </label>
            </div>
          ))}
        </div>

        {/* Grid for displaying filtered TVs */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 m-10">
          {filteredProduct.map(({ id, image, brand, model }) => (
            <div 
            key={id}
            className="cursor-pointer border rounded-lg p-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Link to={`/tv/${id}`}>
                <div className="pageImg">
                  <img
                    className=""
                    src={image}
                    alt={model}
                  />
                </div>
                <div className="proMode">
                  {brand}, {model}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TvPage;
