import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";
import HomePage from "../src/routes/HomePage";
import ProductListPage from "./routes/ProductListPage";
import ProductDetailsPage, {
  loader as productDetailsLoader,
} from "./routes/ProductDetailsPage";
import CartPage from "./routes/CartPage";
import Saved from "./components/saved";
import BuyItLater from "./components/BuyItLater";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="products" element={<ProductListPage />} />
      <Route path="cart" element={<CartPage />} />
        
      <Route
        path=":productName"
        element={<ProductDetailsPage />}
        loader={productDetailsLoader}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
