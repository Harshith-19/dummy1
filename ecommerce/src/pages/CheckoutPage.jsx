import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import CartItem from '../components/CartItems'; // Import CartItem component

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    apartment: '',
    city: '',
    country: '',
    zipCode: '',
    contactNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
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
      <h1>Checkout</h1>

      {Object.keys(cartItems).length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/products" className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block">
            Go to Products
          </Link>
        </div>
      ) : (
        <div>
          <div className="mb-8">
            {Object.values(cartItems).map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mb-8">
        <h2>Shipping Information</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={shippingInfo.firstName}
            onChange={handleInputChange}
            className="border p-2"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={shippingInfo.lastName}
            onChange={handleInputChange}
            className="border p-2"
            required
          />
          <input
            type="text"
            name="apartment"
            placeholder="Apartment"
            value={shippingInfo.apartment}
            onChange={handleInputChange}
            className="border p-2"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shippingInfo.city}
            onChange={handleInputChange}
            className="border p-2"
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={shippingInfo.country}
            onChange={handleInputChange}
            className="border p-2"
            required
          />
          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            value={shippingInfo.zipCode}
            onChange={handleInputChange}
            className="border p-2"
            required
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={shippingInfo.contactNumber}
            onChange={handleInputChange}
            className="border p-2"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">
          Proceed to Payment
        </button>
      </form>

          <div className="mt-4">
            <h2 className="text-xl font-semibold">Total: ${calculateTotal()}</h2>
            <p>Shipping will be calculated at next.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
