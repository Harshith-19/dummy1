import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, addToCart, reduceQuantity } from '../store/slices/cartSlice'; // Import actions from cartSlice

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ productId }));
  };

  const handleReduceQuantity = (productId) => {
    dispatch(reduceQuantity({ productId }));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product }));
  };

  return (
    <div className="flex items-center border-b border-gray-200 mb-4 pb-4">
      <img src={product.image} alt={product.title} className="w-20 h-20 object-cover mr-4" />
      <div>
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p className="text-gray-500">${product.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <button
            className="bg-gray-200 text-gray-600 px-2 py-1 mr-2"
            onClick={() => handleReduceQuantity(product.id)}
          >
            -
          </button>
          <span>{product.quantity}</span>
          <button
            className="bg-gray-200 text-gray-600 px-2 py-1 ml-2"
            onClick={() => handleAddToCart(product)}
          >
            +
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 ml-4"
            onClick={() => handleRemoveFromCart(product.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
