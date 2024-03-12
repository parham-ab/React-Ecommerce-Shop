import { createSlice } from "@reduxjs/toolkit";
const storedState = JSON.parse(localStorage.getItem("shopStore-productslist"));

const initialState = storedState
  ? storedState
  : {
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
      const itemIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.selectedItems[itemIndex].quantity += 1;
      } else {
        const product = { ...action.payload, quantity: 1 };
        state.selectedItems.push(product);
      }
      localStorage.setItem("shopStore-productslist", JSON.stringify(state));
    },
    removeItem: (state, action) => {
      state.selectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("shopStore-productslist", JSON.stringify(state));
    },
    decrease: (state, action) => {
      const index = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.selectedItems[index].quantity > 0) {
        state.selectedItems[index].quantity--;
      }
      localStorage.setItem("shopStore-productslist", JSON.stringify(state));
    },
    checkout: (state) => {
      localStorage.setItem(
        "shopStore-productslist",
        JSON.stringify(initialState)
      );
      return initialState;
    },
    clear: () => initialState,
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
