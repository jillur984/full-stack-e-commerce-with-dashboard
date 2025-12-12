import Product from "@/pages/Product";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <Product key={item._id} productData={item} />
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage, products }) => {
  const [itemOffset, setItemOffset] = useState(0);

  if (!products || products.length === 0) return <p>Loading products...</p>;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage; // ✅ correct
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <Items currentItems={currentItems} />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-3">
  <ReactPaginate
    onPageChange={handlePageClick}
    pageCount={pageCount}
    pageRangeDisplayed={3}
    marginPagesDisplayed={2}
    previousLabel="< Prev"
    nextLabel="Next >"
    containerClassName="flex items-center gap-2 flex-wrap"
    pageLinkClassName="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:bg-black hover:text-white transition-colors duration-300"
    activeClassName="bg-black text-white border-black"
    previousClassName="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200 cursor-pointer"
    nextClassName="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200 cursor-pointer"
    disabledClassName="opacity-50 cursor-not-allowed"
  />

  <p className="text-gray-600 text-sm md:text-base">
    Showing {itemOffset + 1} - {Math.min(endOffset, products.length)} of {products.length} items
  </p>
</div>

    </div>
  );
};

export default Pagination;
