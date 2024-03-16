import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./features/api/apiSlice.js";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import ScrollToTop from "hooks/useScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <ApiProvider api={apiSlice}>
          <Provider store={store}>
            <App />
            <ToastContainer />
            <ScrollToTop />
          </Provider>
        </ApiProvider>
      </NextUIProvider>
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>
);
