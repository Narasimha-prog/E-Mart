import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { computerData } from '../data/computers';
import { Link } from 'react-router-dom';

const ComputerPage = () => {
  // Extract unique companies outside of the component
  const uniqueCompanies = [...new Set(computerData.map((item) => item.company))];
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (company) => {
    setSelectedProduct((prevSelected) =>
      prevSelected.includes(company)
        ? prevSelected.filter((item) => item !== company)
        : [...prevSelected, company]
    );
  };

  // Filter products based on selected companies
  const filteredProduct =
    selectedProduct.length === 0
      ? computerData
      : computerData.filter((item) => selectedProduct.includes(item.company));

  return (
    <>
      <NavBar />
      <div className="flex items-start">
        {/* Sidebar for selecting companies */}
        <div className=" max-w-sm sm:w-52 bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
          {uniqueCompanies.map((company) => (
            <div key={company}>
              <label 
              htmlFor={`checkbox-${company}`} 
               className="flex cursor-pointer items-center space-x-2">
                <input
                  id={`checkbox-${company}`}
                  type="checkbox"
                  checked={selectedProduct.includes(company)}
                  onChange={() => companyHandler(company)}
                   className="cursor-pointer"
                />
                <div className="font-medium font-sans truncate">{company}</div>
              </label>
            </div>
          ))}
        </div>

        {/* Grid for filtered computers */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 m-5 sm:m-10">
          {filteredProduct.map((item) => (
            <div key={item.id}
            className="cursor-pointer border rounded-lg p-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Link to={`/computers/${item.id}`}>
                <div className="pageImg">
                  <img
                    className=""
                    src={`.${item.image}`}
                    alt={item.model}
                  />
                </div>
                <div className="proModel">
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

export default ComputerPage;
