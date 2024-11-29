"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";
import { CartItem, ProductType } from "@/app/Home";

type CartContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  handleAddToCart: (product: ProductType) => void;
  handleRemoveFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: ProductType) => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        cartItems,
        setCartItems,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
