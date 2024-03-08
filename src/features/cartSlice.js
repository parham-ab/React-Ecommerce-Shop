import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
  count: 0,
  totalPay: 0,
  checkOut: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.selectedItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      state.count++;
      state.totalPay += action.payload.price;
    },
    increase: (state, action) => {
      const selectedItem = state.selectedItems.find(
        (item) => item.id === action.payload.id
      );
      if (selectedItem) {
        selectedItem.quantity++;
        state.count++;
        state.totalPay += selectedItem.price;
      }
    },
    decrease: (state, action) => {
      const selectedItem = state.selectedItems.find(
        (item) => item.id === action.payload.id
      );
      if (selectedItem) {
        if (selectedItem.quantity > 1) {
          selectedItem.quantity--;
          state.count--;
          state.totalPay -= selectedItem.price;
        }
      }
    },
    removeItem: (state, action) => {
      state.selectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.count -= action.payload.quantity;
      state.totalPay -= action.payload.price * action.payload.quantity;
    },
    clearCart: (state) => {
      state.selectedItems = [];
      state.count = 0;
      state.totalPay = 0;
    },
    toggleCheckOut: (state) => {
      state.checkOut = !state.checkOut;
    },
  },
});

export const {
  addItem,
  increase,
  decrease,
  removeItem,
  clearCart,
  toggleCheckOut,
} = cartSlice.actions;

export default cartSlice.reducer;
