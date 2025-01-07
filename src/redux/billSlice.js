import { createSlice } from '@reduxjs/toolkit';

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
  test: {}, // Initializes test as an empty object to store key-value pairs
  
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
    setTest: (state, action) => {
      const updates = action.payload; // Can be an object or an array of objects
      if (Array.isArray(updates)) {
        updates.forEach(({ key, value }) => {
          state.test[key] = value;
        });
      } else {
        const { key, value } = updates;
        state.test[key] = value;
      }
    },
    
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
  setTest,
} = billSlice.actions;

export default billSlice.reducer;
