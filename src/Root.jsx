import React, { useReducer, useState } from "react";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";
import {
  CartReducer,
  cartDispatch,
  cartItemID,
} from "./components/cartContext";

function Root() {
  const [cart, dispatch] = useReducer(CartReducer, [1]);

  return (
    <cartItemID.Provider value={cart}>
      <cartDispatch.Provider value={dispatch}>
        <div>
          <Header />
          <Menu />
          <main>
            <Outlet />
          </main>
        </div>
      </cartDispatch.Provider>
    </cartItemID.Provider>
  );
}

export default Root;
