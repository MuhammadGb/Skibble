"use client";

import { CartItem } from "@/app/Home";
import { Button, Drawer } from "flowbite-react";
import { BiCart, BiMinus } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { PiPlus } from "react-icons/pi";
import EmptyState from "./EmptyState";
import { useCart } from "@/globals/CartProvider";

export default function CartComponent() {
  const { isOpen, setIsOpen, cartItems, setCartItems } = useCart();

  const handleClose = () => setIsOpen(false);

  const increaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity < 5
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
  const clearCart = () => {
    setCartItems([]);
  };
  const decreaseQuantity = (id: number) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.id === id
              ? item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : null
              : item
          )
          .filter((item) => item !== null) as CartItem[]
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Drawer
      open={isOpen}
      onClose={handleClose}
      position="right"
      className="xl:w-1/3 lg:w-1/2 md:w-2/3 sm:w-3/4"
    >
      <Drawer.Header title={`My Cart (${cartItems.length})`} titleIcon={BiCart}>
        {" "}
      </Drawer.Header>
      <div className="p-4">
        {cartItems.length > 0 ? (
          <>
            <div className="space-y-4 min-h-[60vh]">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-2 border-b"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">{item.name}</h4>
                      <p className="mt-1 text-lg font-semibold text-gray-500">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <Button
                      size="xs"
                      color="failure"
                      aria-label="Remove item"
                      onClick={() => removeItem(item.id)}
                      className="!p-1 mb-3"
                    >
                      <FaTrash />
                    </Button>
                    <div className="flex items-center gap-2">
                      <Button
                        size="xs"
                        color="light"
                        aria-label="Subtract from item quantity"
                        onClick={() => decreaseQuantity(item.id)}
                        className="!p-1"
                      >
                        <BiMinus size={12} />
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        size="xs"
                        color="light"
                        aria-label="Add to item quantity"
                        onClick={() => increaseQuantity(item.id)}
                        className="!p-1"
                        disabled={item.quantity >= 5}
                      >
                        <PiPlus size={12} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  Sum Total: ${total.toFixed(2)}
                </h3>
                <Button
                  color="failure"
                  onClick={clearCart}
                  aria-label="Clear cart"
                  className=""
                >
                  Clear cart
                </Button>
              </div>
              <Button aria-label="Checkout items" className="w-full mt-4">
                Checkout
              </Button>
            </div>
          </>
        ) : (
          <>
            <EmptyState />
            <h3 className="text-center">Your cart is empty.</h3>
          </>
        )}
      </div>
    </Drawer>
  );
}
