import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { kitchenData } from '../data/kitchen';
import { Link } from 'react-router-dom';

const KitchenPage = () => {
  // Extract unique brands from kitchenData
  const uniqueBrands = [...new Set(kitchenData.map((item) => item.brand))];
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
      ? kitchenData
      : kitchenData.filter((item) => selectedProduct.includes(item.brand));

  return (
    <>
      <NavBar />
      <div className="flex">
        {/* Sidebar for selecting brands */}
        <div className="border-2 border-stone-600 h-fit p-2">
          {uniqueBrands.map((brand) => (
            <div key={brand}>
              <label htmlFor={`checkbox-${brand}`} className="flex">
                <input
                  id={`checkbox-${brand}`}
                  type="checkbox"
                  checked={selectedProduct.includes(brand)}
                  onChange={() => companyHandler(brand)}
                />
                <div className="font-sans font-semibold">{brand}</div>
              </label>
            </div>
          ))}
        </div>

        {/* Grid for filtered kitchen products */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 m-10">
          {filteredProduct.map((item) => (
            <div key={item.id}>
              <Link to={`/kit/${item.id}`}>
                <div className="pageImg">
                  <img
                    className="transition-transform duration-300 hover:scale-110"
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

export default KitchenPage;
