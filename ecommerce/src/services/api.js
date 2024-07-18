import axios from 'axios';

const BASE_URL = 'https://fake-ecommerce-app-api.onrender.com';

export const fetchProducts = async (params) => {
    try {
        const response = await axios.get(`${BASE_URL}/products`, { params: params });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const fetchProductDetail = async (productID) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/${productID}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const fetchOrders = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/orders/user/1`);
        console.log(1);
        return response.data;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};

export const createOrder = async (orderData) => {
    try {
        const response = await axios.post(`${BASE_URL}/orders`, orderData);
        return response.data;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};