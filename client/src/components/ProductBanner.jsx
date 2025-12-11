import React from "react";

const ProductBanner = ({itemsPerPageFormBanner}) => {
  return (
    <div className="flex gap-5 justify-between w-full">
      <div className="">Sorting Filter</div>
      <div className="flex gap-3">
        <label htmlFor="products_sort">Show</label>
        <select className="w-16 md:w-20 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor" onChange={(e)=>itemsPerPageFormBanner(e.target.value)}
          >
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="24">24</option>
          <option value="30">30</option>
        </select>
      </div>
    </div>
  );
};

export default ProductBanner;
