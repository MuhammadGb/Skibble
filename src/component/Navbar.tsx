"use client";
import { useState } from "react";
import React from "react";
import { Navbar } from "flowbite-react";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import Image from "next/image";
import { GoSearch } from "react-icons/go";

const NavbarLayout = () => {
  const [toglSearch, setToglSearch] = useState(false);
  return (
    <Navbar
      fluid
      rounded
      className="fixed top-0 z-30 w-full h-24 bg-white border-b shadow-lg"
      role="navigation"
    >
      {/* Logo */}
      <div className="flex items-center justify-between w-full h-full gap-4 mt-4">
        <Navbar.Brand
          href="/"
          aria-label="Go to homepage"
          className="sm:ml-8 ml-2 md:ml-16"
        >
          <div className="w-10 h-10 relative mr-3">
            <Image src="/images/logoNav.png" alt="img" priority fill />
          </div>
          <span className="self-center text-sm font-semibold md:text-[1.4rem] whitespace-nowrap">
            Kitchens
          </span>
        </Navbar.Brand>

        <div className="flex justify-end w-3/4 gap-6 sm:mr-12 mr-4 md:mr-20 md:w-1/2">
          <div>
            {toglSearch ? (
              <div
                style={{
                  paddingLeft: "0.4rem",
                }}
                className="relative flex items-center justify-end w-5/6 pr-4 border border-gray-500 rounded-lg md:w-2/3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <input
                  type="text"
                  placeholder="Search for names and categories of products..."
                  style={{ border: "none", outline: "none", boxShadow: "none" }}
                  className="w-full "
                  aria-label="Search for products"
                />
                <FiSearch aria-hidden="true" />
              </div>
            ) : (
              <GoSearch className="text-[1.5rem] cursor-pointer" />
            )}
          </div>
          <div className="flex items-center ">
            <div className="relative">
              <FiShoppingCart
                className="text-[1.5rem] text-[#233748] cursor-pointer"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarLayout;
