import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded p-4">
      <img src={product.image} alt={product.title} className="w-full mb-2" />
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="text-sm text-gray-500 mb-2">{product.description}</p>
      <p className="font-semibold mb-2">${product.price}</p>
      <div className="flex items-center">
        <span className="text-yellow-500">{product.rating} stars</span>
        <span className="ml-auto">{product.category}</span>
      </div>
    </div>
  );
};

export default ProductCard;
