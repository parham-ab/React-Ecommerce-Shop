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

const sumItems = (items) => {
  const count = items.reduce((total, product) => total + product.quantity, 0);
  const totalPay = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { count, totalPay };
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
      const { count, totalPay } = sumItems(state.selectedItems);
      state.count = count;
      state.totalPay = totalPay;
      localStorage.setItem("shopStore-productslist", JSON.stringify(state));
    },
    removeItem: (state, action) => {
      state.selectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      const { count, totalPay } = sumItems(state.selectedItems);
      state.count = count;
      state.totalPay = totalPay;
      localStorage.setItem("shopStore-productslist", JSON.stringify(state));
    },
    decrease: (state, action) => {
      const index = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.selectedItems[index].quantity > 0) {
        state.selectedItems[index].quantity--;
      }
      const { count, totalPay } = sumItems(state.selectedItems);
      state.count = count;
      state.totalPay = totalPay;
      localStorage.setItem("shopStore-productslist", JSON.stringify(state));
    },
    checkoutCart: (state) => {
      state.selectedItems = [];
      state.count = 0;
      state.totalPay = 0;
      state.checkOut = true;
      localStorage.setItem("shopStore-productslist", JSON.stringify(state));
    },
    clearCart: (state) => {
      state.selectedItems = [];
      state.count = 0;
      state.totalPay = 0;
      state.checkOut = false;
      localStorage.setItem("shopStore-productslist", JSON.stringify(state));
    },
  },
});

export const { addItem, decrease, removeItem, clearCart, checkoutCart } =
  cartSlice.actions;

export default cartSlice.reducer;
