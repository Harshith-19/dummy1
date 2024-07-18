import React, { useState, useEffect } from 'react';
import { fetchOrders } from '../services/api';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrdersUser = async () => {
      try {
        setLoading(true);
        const ordersData = await fetchOrders();
        setOrders(ordersData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Error fetching orders. Please try again later.');
        setLoading(false);
      }
    };

    fetchOrdersUser();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>User ID: {order.userId}</p>
            <p>Payment Status: {order.paymentStatus}</p>
            <p>Order Status: {order.orderStatus}</p>
            {/* Display other order details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersPage;
