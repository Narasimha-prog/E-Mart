import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { womanData } from '../data/woman';
import { Link } from 'react-router-dom';

const WomenPage = () => {
  // Extract unique brands from womanData
  const uniqueBrands = [...new Set(womanData.map((item) => item.brand))];
  const [selectedProduct, setSelectedProduct] = useState([]);

  // Handler to toggle the selected brands
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
      ? womanData
      : womanData.filter((item) => selectedProduct.includes(item.brand));

  return (
    <>
      <NavBar />
      <div className="flex">
        {/* Sidebar for brand selection */}
        <div className="border-2 border-stone-600 h-fit p-2">
          {uniqueBrands.map((brand) => (
            <div key={brand}>
              <label className="flex">
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(brand)}
                  onChange={() => companyHandler(brand)}
                />
                <div className="font-semibold font-sans">{brand}</div>
              </label>
            </div>
          ))}
        </div>

        {/* Grid for displaying filtered products */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 m-10">
          {filteredProduct.map(({ id, image, brand, model }) => (
            <div key={id}>
              <Link to={`/woman/${id}`}>
                <div className="pageImg">
                  <img
                    className="transition-transform duration-300 hover:scale-110"
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

export default WomenPage;
