import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, reduceQuantity, addToCart } from '../store/slices/cartSlice';
import CartItem from '../components/CartItems';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () => {
    let total = 0;
    for (const productId in cartItems) {
      const { price, quantity } = cartItems[productId];
      total += price * quantity;
    }
    return total.toFixed(2);
  };

  return (
    <div>
      <h1>Cart</h1>

      {Object.keys(cartItems).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {Object.values(cartItems).map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
          <div className="mt-4">
            <button
              className="bg-red-500 text-white px-4 py-2"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Total: ${calculateTotal()}</h2>
            <p>Shipping will be calculated at next.</p>
            <Link to="/checkout">
              <button className="bg-blue-500 text-white px-4 py-2 mt-4">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
