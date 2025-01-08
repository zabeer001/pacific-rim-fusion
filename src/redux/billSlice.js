import { createSlice } from '@reduxjs/toolkit';
import { CloudCog } from 'lucide-react';

const initialState = {
  country: '',
  city: '',
  address: '',
  apartment: '',
  email: '',
  phone: '',
  paymentMethod: '', // default to credit card
  cardDetails: {
    cardholderName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  },
  subtotal: '',
  shipping: '',
  total: '',
  products: [], // Initializes test as an empty object to store key-value pairs
  
};

const billSlice = createSlice({
  name: 'bill',
  initialState,

  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },

    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },

    setCalculateTotal: (state) => {
      state.total = state.subtotal + state.shipping;
    },

    setName: (state, action) => {
      state.name = action.payload.name;
    },

    setCountry: (state, action) => {
      state.country = action.payload.country;
    },

    setCity: (state, action) => {
      state.city = action.payload.city;
    },

    setAddress: (state, action) => {
      state.address = action.payload.address;
    },

    setApartment: (state, action) => {
      state.apartment = action.payload.apartment;
    },

    setEmail: (state, action) => {
      state.email = action.payload.email;
    },

    setPhone: (state, action) => {
      state.phone = action.payload.phone;
    },
    setProduct: (state, action) => {
      // Ensure that products are an array`
      state.products = action.payload || [];
    }
    
    
  },
});

export const { 
  setPaymentMethod, 
  setCalculateTotal,
  setName,
  setCountry,
  setCity,
  setAddress,
  setApartment,
  setEmail,
  setPhone,
  updateField,
  setProduct,
} = billSlice.actions;

export default billSlice.reducer;
