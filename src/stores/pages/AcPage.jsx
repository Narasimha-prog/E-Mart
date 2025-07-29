import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { acData } from '../data/ac';
import { Link } from 'react-router-dom';

const AcPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (company) => {
    setSelectedProduct((prevSelectedProduct) => {
      if (prevSelectedProduct.includes(company)) {
        return prevSelectedProduct.filter(item => item !== company);
      } else {
        return [...prevSelectedProduct, company];
      }
    });
  };

  const filteredProduct = selectedProduct.length === 0
    ? acData
    : acData.filter((item) => selectedProduct.includes(item.company));

  return (
    <>
      <NavBar />
      <div className="flex items-start">
        {/* Sidebar Filter */}
        <div className="max-w-sm sm:w-52 bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
          {acData.map((phone) => (
            <div key={phone.company}>
              <label
                className="flex cursor-pointer items-center space-x-2"
                htmlFor={`checkbox-${phone.company}`}
              >
                <input
                  id={`checkbox-${phone.company}`}
                  type="checkbox"
                  checked={selectedProduct.includes(phone.company)}
                  onChange={() => companyHandler(phone.company)}
                  className="cursor-pointer"
                />
                <div className="font-sans font-medium truncate">{phone.company}</div>
              </label>
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 m-10">
          {filteredProduct.length === 0 && (
            <div>No products available for the selected companies.</div>
          )}

          {filteredProduct.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer border rounded-lg p-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Link to={`/ac/${item.id}`} className="block">
                <div className="pageImg">
                  <img
                    className=""
                    src={`.${item.image}`}
                    alt={`${item.company} ${item.model}`}
                  />
                </div>
                <div className="proModel mt-2 font-semibold">
                  {item.company}, {item.model}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AcPage;
