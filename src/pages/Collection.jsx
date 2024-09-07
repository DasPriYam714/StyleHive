import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ContextShop";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [collection, setCollection] = useState([]);
  const [showFilter, setFilter] = useState(false);
  const [type, setType] = useState([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page

  const toogleType = (e) => {
    if (type.includes(e.target.value)) {
      setType((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setType((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();

    if (type.length > 0) {
      productCopy = productCopy.filter((item) =>
        type.includes(item.subCategory)
      );
    }

    setCollection(productCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [type]);

  // Get the paginated data
  const paginatedCollection = collection.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle pagination button click
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to the top of the collection component
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* Filter Option */}
        <div className="w-1/3 ">
          <button
            onClick={() => setFilter(!showFilter)}
            className="w-full p-2 items-center rounded visible lg:hidden md:hidden "
          >
            Type
          </button>

          <div className={`rounded ${showFilter ? "" : "hidden"} sm:block`}>
            <div className="space-y-5 text-gray-700">
              <button
                className="w-full p-2 bg-black text-white rounded"
                value={"Topwear"}
                onClick={(e) => toogleType(e)}
              >
                Topwear
              </button>
              <button
                className="w-full p-2 bg-black text-white rounded"
                value={"Bottomwear"}
                onClick={(e) => toogleType(e)}
              >
                Bottomwear
              </button>
              <button
                className="w-full p-2 bg-black text-white rounded"
                value={"Winterwear"}
                onClick={(e) => toogleType(e)}
              >
                Winterwear
              </button>
            </div>
          </div>
        </div>

        {/* All collection */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6">
          {paginatedCollection.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </div>
      </div>
      {/* Pagination */}
      <div className="join mt-4">
        {[...Array(Math.ceil(collection.length / itemsPerPage)).keys()].map(
          (page) => (
            <button
              key={page}
              className={`hover:bg-slate-400 join-item p-3 rounded-full btn ${
                currentPage === page + 1 ? "btn-active" : ""
              }`}
              onClick={() => handlePageChange(page + 1)}
            >
              {page + 1}
            </button>
          )
        )}
      </div>
    </>
  );
};

export default Collection;
