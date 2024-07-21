import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { product } = action.payload;
      const productId = product.id;

      if (state.items[productId]) {
        state.items[productId].quantity++;
      } else {
        state.items[productId] = { ...product, quantity: 1 };
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload.productId;
      delete state.items[productId];
    },
    clearCart(state) {
      state.items = {};
    },
    reduceQuantity(state, action) {
      const productId = action.payload.productId;

      if (state.items[productId]) {
        if (state.items[productId].quantity > 1) {
          state.items[productId].quantity--;
        } else {
          delete state.items[productId];
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, reduceQuantity } = cartSlice.actions;
export default cartSlice.reducer;
