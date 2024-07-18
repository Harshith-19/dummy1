import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductDetail } from '../services/api';
import { addToCart, removeFromCart } from '../store/slices/cartSlice';

const ProductDetailPage = () => {
  const { productId } = useParams(); // Extract productId from URL params
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset product state when productId changes
    setProduct(null);
    setLoading(true);
    setError(null);

    const fetchProduct = async () => {
      try {
        const productData = await fetchProductDetail(productId);
        setProduct(productData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Error fetching product. Please try again later.');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    dispatch(addToCart({ product }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ productId: product.id }));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  // Calculate quantity of current product in cart
  const quantityInCart = cartItems[product.id] ? cartItems[product.id].quantity : 0;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img src={product.image} alt={product.title} className="w-full" />
        </div>
        <div>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="font-semibold">${product.price}</p>
          <p className="text-yellow-500">{product.rating} stars</p>
          <p>Category: {product.category}</p>
          {/* Display quantity in cart and add/remove buttons */}
          <div className="mt-4">
            <p>Quantity in Cart: {quantityInCart}</p>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded shadow-lg"
            >
              Add to Cart
            </button>
            {quantityInCart > 0 && (
              <button
                onClick={handleRemoveFromCart}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded shadow-lg ml-2"
              >
                Remove from Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
