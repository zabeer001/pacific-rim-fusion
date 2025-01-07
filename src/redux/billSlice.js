import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  country: 'bd',
  city: 'dhaka',
  address: '',
  apartment: '',
  email: '',
  phone: '',
  paymentMethod: 'creditCard', // default to credit card
  cardDetails: {
    cardholderName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  },
  subtotal: 21000,
  shipping: 3000,
  total: 24000,
  fullName: '',
  updateField:'',
};

const billSlice = createSlice({
  name: 'bill',
  initialState,

  reducers: {

    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },

    setCalculateTotal: (state) => {
      state.total = state.subtotal + state.shipping;
    },
    setFullName: (state, action) => {
      state.fullName = action.payload.fullName;
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
      state[action.payload.name]
    },

  },
});

export const { 
  setPaymentMethod, 
  calculateTotal,
  setFullName,
  setCountry,
  setCity,
  setAddress,
  setApartment,
  setEmail,
  setPhone,
  updateField } = billSlice.actions;

export default billSlice.reducer;