import { configureStore } from '@reduxjs/toolkit';
import billReducer from './billSlice';

// Create the store and combine slices
const store = configureStore({
  reducer: {
    bill: billReducer
  }
});

export default store;
