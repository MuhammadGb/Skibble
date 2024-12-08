"use client";
import { Dispatch, SetStateAction } from "react";
import React from "react";
import { Navbar, Button } from "flowbite-react";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { BiLogo500Px } from "react-icons/bi";
import { useCart } from "@/globals/CartProvider";

type NavbarPropType = {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

const NavbarLayout = (props: NavbarPropType) => {
  const { setIsOpen, cartItems } = useCart();

  const { handleSearch, query } = props;

  return (
    <Navbar
      fluid
      rounded
      className="fixed top-0 z-30 w-full h-24 bg-white border-b shadow-lg"
      role="navigation"
    >
      {/* Logo */}
      <div className="flex items-center justify-between w-full h-full gap-4 mt-4">
        <Navbar.Brand href="/" aria-label="Go to homepage">
          <BiLogo500Px size={40} aria-hidden="true" />
          <span className="self-center text-sm font-semibold md:text-[1.4rem] whitespace-nowrap">
            ShopEase
          </span>
        </Navbar.Brand>

        <div className="flex justify-end w-3/4 gap-4 md:gap-12 md:w-1/2">
          <div
            style={{
              paddingLeft: "0.4rem",
            }}
            className="relative flex items-center justify-end w-5/6 pr-4 border border-gray-500 rounded-lg md:w-2/3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search for names and categories of products..."
              style={{ border: "none", outline: "none", boxShadow: "none" }}
              className="w-full "
              aria-label="Search for products"
            />
            {query ? (
              <FiSearch
                aria-hidden="true"
                className="absolute text-lg !leading-normal md:text-xl text-gray-500 top-2 hover:text-gray-700"
              />
            ) : (
              <FiSearch aria-hidden="true" />
            )}
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Button
                size="sm"
                color="light"
                pill
                onClick={() => setIsOpen(true)}
                aria-label="View cart"
              >
                <FiShoppingCart size={20} aria-hidden="true" />
              </Button>
              <span
                className="absolute top-0 right-0 px-1 text-xs font-bold text-white bg-red-500 rounded-full"
                aria-live="polite"
              >
                {cartItems?.length < 1
                  ? ""
                  : cartItems?.length > 9
                  ? "9+"
                  : cartItems?.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarLayout;
