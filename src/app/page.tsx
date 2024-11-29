import React from "react";
import Home from "./Home";
import SeoMeta from "@/globals/SeoMeta";
import { CartProvider } from "@/globals/CartProvider";

const page = () => {
  return (
    <>
      <CartProvider>
        <SeoMeta
          title="Home"
          meta_title="ShopEase - Online Shopping Made Easy"
        />
        <Home />
      </CartProvider>
    </>
  );
};

export default page;
