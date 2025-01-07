import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './billSlice';

// Create the store and combine slices
const store = configureStore({
  reducer: {
    order: orderReducer
  }
});

export default store;
