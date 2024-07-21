import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="block border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div>
        <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{product.title}</h3>
          <p className="text-gray-500 mb-2">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
