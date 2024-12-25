"use client";
import FooterLayout from "@/component/Footer";
import NavbarLayout from "@/component/Navbar";
import Products from "@/component/Products";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Kitchen - Online Shopping Made Easy";
  }, []);

  return (
    <>
      <div className="w-full h-full text-black bg-[#f9f9f9]">
        <div>
          <NavbarLayout />
          <div className="relative top-25 z-10">
            <div className="hidden md:flex md:flex-col object-contain 2xl:object-cover">
              <div className="w-full relative h-64">
                <Image
                  src="/images/banner_desktop.png"
                  alt="img"
                  priority
                  fill
                />
              </div>
              <div className="xl:ml-24 md:ml-12  relative z-10 bottom-8">
                <div className="relative flex items-center justify-center w-24 h-24 bg-[#233748] rounded-full text-[#D3D7DA] text-6xl font-bold border-4 border-white">
                  C
                  <div className="absolute bottom-0 right-0">
                    <div className="relative w-6 h-6">
                      <Image
                        src="/images/badge_mark.png"
                        alt="img"
                        priority
                        fill
                        className="hidden md:flex object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:hidden flex-col ">
              <div className="w-full relative h-64 ">
                <Image
                  src="/images/banner_mobile.png"
                  alt="img"
                  priority
                  fill
                  className="object-contain h-full absolute -z-10"
                />
                <div className="ml-4 relative sm:top-40 top-36 z-10">
                  <div className="relative flex items-center justify-center w-24 h-24 bg-[#233748] rounded-full text-[#D3D7DA] text-6xl font-bold border-4 border-white">
                    C
                    <div className="absolute bottom-0 right-0 ">
                      <div className="relative w-6 h-6">
                        <Image
                          src="/images/badge_mark.png"
                          alt="img"
                          priority
                          fill
                          className="md:hidden flex object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Products />
            <FooterLayout />
          </div>
        </div>
      </div>
    </>
  );
}
