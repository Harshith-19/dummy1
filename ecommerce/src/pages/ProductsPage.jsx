import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        category: '',
        priceRange: '',
        rating: ''
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchFilteredProducts = async () => {
            try {
                setLoading(true);
                const params = {
                    page: currentPage,
                    category: filters.category,
                    priceRange: filters.priceRange,
                    rating: filters.rating
                };
                const response = await fetchProducts(params);
                setProducts(response.products);
                setTotalPages(response.totalPages);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Error fetching products. Please try again later.');
                setLoading(false);
            }
        };
        fetchFilteredProducts();
    }, [currentPage, filters]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
        setCurrentPage(1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

  return (
    <div className="flex">
      {/* Filters Section */}
      <div className="w-1/4 p-4">
        <h2>Filters</h2>
        <div>
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" value={filters.category} onChange={handleFilterChange}>
            <option value="">All Categories</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="priceRange">Price Range:</label>
          <select id="priceRange" name="priceRange" value={filters.priceRange} onChange={handleFilterChange}>
            <option value="">All Prices</option>
            <option value="0-100">Up to $100</option>
            <option value="100-500">$100 - $500</option>
            <option value="500-1000">$500 - $1000</option>
            {/* Add more price ranges as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <select id="rating" name="rating" value={filters.rating} onChange={handleFilterChange}>
            <option value="">All Ratings</option>
            <option value="4">4 Stars & Above</option>
            <option value="3">3 Stars & Above</option>
            <option value="2">2 Stars & Above</option>
            <option value="1">1 Star & Above</option>
          </select>
        </div>
      </div>

      {/* Products Section */}
      <div className="w-3/4 p-4">
        <h2>Products</h2>
        <div className="grid grid-cols-3 gap-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 mr-2 bg-gray-200 hover:bg-gray-300"
          >
            Previous Page
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300"
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
