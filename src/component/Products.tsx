"use client";

import { useState, useMemo, Dispatch, SetStateAction } from "react";
import { ProductType } from "@/app/Home";
import {
  Button,
  Clipboard,
  Pagination,
  Select,
  Spinner,
  Tooltip,
} from "flowbite-react";
import EmptyState from "./EmptyState";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { RxCopy, RxDividerVertical } from "react-icons/rx";
import { SlLocationPin } from "react-icons/sl";
import { Tabs } from "flowbite-react";
import { Sidebar } from "flowbite-react";
import {
  dropDownTheme,
  dropDownThemeNew,
  shortenString,
  tabTheme,
  tabThemeNew,
} from "@/globals/utils/utils";
import { HiFilter } from "react-icons/hi";

//

type ProductPropType = {
  data: ProductType[];
  count: number;
  page: number;
  loading: boolean;
  setPage: Dispatch<SetStateAction<number>>;
  perPage: number;
  setPerPage: Dispatch<SetStateAction<number>>;
};

export default function Products() {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="relative lg:ml-16 xl:ml-24 md:ml-16 ml-4 ">
      <div className="flex flex-col lg:flex-row justify-between w-full h-fit">
        <div className="flex flex-col w-full lg:w-1/2">
          <div className="flex h-fit gap-4">
            <h1 className=" text-2xl font-bold text-black">Checkers Kitchen</h1>
            <div className="ml-6 relative flex gap-2 items-center justify-center">
              <div className="w-2 h-2 rounded-full border-2 border-[#919BA3]"></div>
              <p className="text-[#FF5B5C]">Closed</p>
              <div className="absolute -z-10">
                <div className="flex items-center gap-0 ">
                  <div className="w-0 h-0 border-t-[18px] m-0 border-r-[36px] border-b-[18px] border-transparent border-r-white border-b-transparent border-t-transparent"></div>
                  <div className="w-16 h-9 border bg-white border-[#f9f9f9] m-0"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-5/6 md:w-4/5 lg:w-2/3 mt-4">
            <p className="text-[#6C7A85] text-[14px] font-[400]">
              Continental Dishes | Local Dishes | Special Treats |
              Intercontinental | Chinese dish{" "}
              <span className="text-[#00BF6D] font-[500] cursor-pointer md:inline hidden">
                See More
              </span>
            </p>
          </div>
          <div className="md:flex hidden gap-3 items-center mt-4">
            <AiOutlineClockCircle className="text-[#6C7A85] text-[20px]" />
            <p className="text-[#6C7A85] text-[14px]">
              Opening Hours:{" "}
              <span className="text-black text-[16px]">
                09:30 AM - 05:30 PM
              </span>
            </p>
            {collapse ? (
              <MdOutlineKeyboardArrowDown
                className="text-[30px] cursor-pointer"
                onClick={() => setCollapse(false)}
              />
            ) : (
              <MdOutlineKeyboardArrowUp
                className="text-[30px] cursor-pointer"
                onClick={() => setCollapse(true)}
              />
            )}
          </div>
          {collapse ? (
            <div className="md:flex hidden mt-2 ml-8">
              <div className="flex flex-col">
                <p className="text-[12px] text-[#6C7A85]">Delivery Time</p>
                <p className="text-[13px]">09:30 AM - 05:30 PM</p>
              </div>
              <RxDividerVertical
                className="text-[#D3D7DA] h-full text-[16px]"
                size={40}
              />
              <div className="flex flex-col">
                <p className="text-[12px] text-[#6C7A85]">Pick Up Time</p>
                <p className="text-[13px]">09:30 AM - 05:30 PM</p>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="flex items-center mt-4 gap-3">
            <SlLocationPin className="text-[#6C7A85] text-[20px]" />
            <p className="text-[#6C7A85]">Prince Headward Island Canada</p>
          </div>
          <div className=" relative p-4 flex">
            {" "}
            <div className="bg-[#f1f4f4] flex items-center gap-3 p-2 rounded-3xl relative">
              <p className="text-md italic text-[#6C7A85] text-[13px]">
                Copy Link
              </p>
              <RxCopy className="text-[#6C7A85] " />
              <Clipboard
                style={{
                  background: "none",
                  position: "absolute",
                  left: "0",
                  top: "4px",
                  width: "100%",
                }}
                valueToCopy="npm install flowbite-react"
                label=""
                className="w-full"
              ></Clipboard>
            </div>
          </div>
        </div>
        <div className="mr-4 sm:mr-8 md:mr-18 w-[97%] sm:w-full lg:w-[62%] xl:w-1/2 ">
          <div className="flex md:w-11/12 w-full gap-1 shadow-sm border p-4 items-center md:bg-transparent bg-white rounded-lg ">
            <div className="bg-[#00BF6D1A] sm:h-20 h-16 md:w-36 lg:w-52 w-28 xl:w-32 mr-4 rounded-md flex items-center justify-center">
              <div className="sm:w-10 w-6 sm:h-10 h-6 relative">
                <Image
                  src="/images/skibble_logo_sm.png"
                  alt="img"
                  priority
                  fill
                />
              </div>
            </div>
            <div>
              <h2 className="sm:text-[18px] lg:text-[14px] xl:text-[18px] text-[14px] font-semibold">
                Access recipes on the Skibble App
              </h2>
              <p className="text-[#919BA3] sm:text-[14px] xl:text-[14px] text-[12px] lg:text-[12px]">
                Don't miss out on your favorite store's secret recipes, endless
                food content, busy food communities and more.
              </p>
            </div>
            <div className="bg-[#00BF6D] whitespace-nowrap px-3 py-1 rounded-full hidden md:flex items-center h-fit justify-center">
              <p className="text-white text-[16px]">Get App</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex relative w-[94%] sm:w-full">
        <TabComponent />
        <div className="absolute right-0 md:flex hidden">
          <div className="flex gap-6 items-center mr-12 md:mr-16 lg:mr-24">
            <Select theme={dropDownTheme}>
              <option>Pick Up</option>
              <option>Pick Up 1</option>
              <option>Pick Up 2</option>
              <option>Pick Up 3</option>
            </Select>
            <Select theme={dropDownTheme}>
              <option>All Items</option>
              <option>All Items 1</option>
              <option>All Items 2</option>
              <option>All Items 3</option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TabComponent() {
  return (
    <Tabs aria-label="Tabs with underline" variant="underline" theme={tabTheme}>
      <Tabs.Item active title="Menu">
        <MainContent />
      </Tabs.Item>
      <Tabs.Item title="Events">
        <span className="font-medium text-gray-800 dark:text-white">
          Nothing Here
        </span>
      </Tabs.Item>
      <Tabs.Item title="Posts" className="flex sm:hidden">
        <span className="font-medium text-gray-800 dark:text-white">
          Nothing Here
        </span>
      </Tabs.Item>
    </Tabs>
  );
}

const MainContent = () => {
  const [activeNav, setActiveNav] = useState("");
  return (
    <div className="flex">
      {" "}
      <SidebarLayout />
      <div className="flex flex-col gap-4">
        <div className="md:hidden flex w-[98%] m-auto">
          <Select theme={dropDownThemeNew}>
            <option>Breakfast Menu (19:30 - 16:30)</option>
            <option>Lunch Menu (19:30 - 16:30)</option>
          </Select>
        </div>

        <div className="md:hidden flex">
          <Tabs
            aria-label="Tabs with underline"
            variant="underline"
            theme={tabThemeNew}
          >
            <Tabs.Item active title="Most popular"></Tabs.Item>
            <Tabs.Item title="Burgers"></Tabs.Item>
            <Tabs.Item title="Veggies & Salads"></Tabs.Item>
          </Tabs>
        </div>
        <div>
          <p className="sm:text-[20px] text-[17px] font-bold">Burgers</p>
          <div className="flex flex-wrap">
            {[...Array(4)]?.map((data, index) => (
              <div
                key={index}
                className="flex gap-2 items-center my-4 sm:mr-4 rounded-lg border shadow-sm p-2 lg:w-[45%] xl:w-[30%] w-full sm:w-5/6"
              >
                <div className="w-48 h-full relative">
                  <Image
                    src="/images/food_picture.png"
                    alt="img"
                    priority
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between ">
                    {index === 0 ? (
                      <Tooltip
                        content={index === 0 ? `Asparagus Bruschetta` : ""}
                      >
                        <p className="sm:text-[18px] text-[15px] font-bold">
                          {" "}
                          {shortenString("Asparagus Bruschetta", 14)}
                        </p>
                      </Tooltip>
                    ) : (
                      <p className="sm:text-[18px] text-[15px] font-bold">
                        Asparagus Bruschetta
                      </p>
                    )}
                    {index === 0 && (
                      <span className="bg-[#ECFBF4] border border-[#A0D8C0] flex items-center py-1 rounded-full px-2">
                        <span className="text-[#00BF6D] text-[9px] font-extrabold">
                          Pre-order
                        </span>
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-[#6C7A85] text-[13px]">
                      Crispy fresh bread slices topped with asparagus and cheese
                      ...
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h4 className="text-[#919BA4] font-semibold">$200</h4>
                    <span className="border hover:text-black border-[#CFD3D8] rounded-full px-3 py-1 text-[#CFD3D8] text-[12px] hover:border-black cursor-pointer">
                      <span className=" font-semibold ">Add to Cart</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="sm:text-[20px] text-[17px] font-bold">Pizzas</p>
          <div className="flex flex-wrap">
            {[...Array(3)]?.map((data, index) => (
              <div
                key={index}
                className="flex gap-2 items-center my-4 sm:mr-4 rounded-lg border shadow-sm p-2 lg:w-[45%] xl:w-[30%] w-full sm:w-5/6"
              >
                <div className="w-48 h-full relative">
                  <Image
                    src="/images/food_picture.png"
                    alt="img"
                    priority
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between ">
                    {index > 0 ? (
                      <Tooltip
                        content={index > 0 ? `Asparagus Bruschetta` : ""}
                      >
                        <p className="sm:text-[18px] text-[15px] font-bold">
                          {" "}
                          {shortenString("Asparagus Bruschetta", 14)}
                        </p>
                      </Tooltip>
                    ) : (
                      <p className="sm:text-[18px] text-[15px] font-bold">
                        Asparagus Bruschetta
                      </p>
                    )}
                    {index > 0 && (
                      <span className="bg-[#ECFBF4] border border-[#A0D8C0] flex items-center py-1 rounded-full px-2">
                        <span className="text-[#00BF6D] text-[9px] font-extrabold">
                          Pre-order
                        </span>
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-[#6C7A85] text-[13px]">
                      Crispy fresh bread slices topped with asparagus and cheese
                      ...
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h4 className="text-[#919BA4] font-semibold">$200</h4>
                    <span className="border hover:text-black border-[#CFD3D8] rounded-full px-3 py-1 text-[#CFD3D8] text-[12px] hover:border-black cursor-pointer">
                      <span className=" font-semibold ">Add to Cart</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex md:hidden w-full mt-4 justify-center">
          <div className="flex items-center bg-white rounded-full px-3 py-1 gap-2 cursor-pointer">
            <HiFilter />

            <p className="text-[14px] text-[#233748]">Filter By</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export function SidebarLayout() {
  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      className="sm:flex hidden sm:w-1/4 md:w-fit"
    >
      <Sidebar.ItemGroup className="m-0 border-none">
        <Sidebar.Collapse
          label="Breakfast Menu"
          className="pl-0 m-0 first:relative first:right-4 first:mr-4 font-semibold text-[#6C7A85] hover:bg-transparent flex"
        >
          <div>
            {" "}
            <p className=" text-[#6C7A85] text-[14px] ">
              (09:30 AM - 04:30 PM)
            </p>
            <div className="bg-[#23374814] w-[60%] px-3 py-1  rounded-full flex items-center justify-center mt-4">
              <p className=" text-[#6C7A85] text-[12px] font-semibold">
                Not available
              </p>
            </div>
          </div>
        </Sidebar.Collapse>{" "}
      </Sidebar.ItemGroup>
      <Sidebar.Items className="mt-8 mb-0">
        <p className="font-semibold text-[16px]">Category</p>
        <Sidebar.ItemGroup className="m-0 border-none bg-[#f5f7f7] rounded-lg">
          <Sidebar.Item className="text-[14px] text-[#6C7A85] hover:bg-[#00BF6D] hover:text-[#FEFEFE] rounded-full cursor-pointer">
            Morning Snack
          </Sidebar.Item>
          <Sidebar.Item className="text-[14px] text-[#6C7A85] hover:bg-[#00BF6D] hover:text-[#FEFEFE] rounded-full cursor-pointer">
            Burgers
          </Sidebar.Item>
          <Sidebar.Item className="text-[14px] text-[#6C7A85] hover:bg-[#00BF6D] hover:text-[#FEFEFE] rounded-full cursor-pointer">
            Pizzas
          </Sidebar.Item>
          <Sidebar.Item className="text-[14px] text-[#6C7A85] hover:bg-[#00BF6D] hover:text-[#FEFEFE] rounded-full cursor-pointer">
            Veggies & Salads
          </Sidebar.Item>
          <Sidebar.Item className="text-[14px] text-[#6C7A85] hover:bg-[#00BF6D] hover:text-[#FEFEFE] rounded-full cursor-pointer">
            Pastries
          </Sidebar.Item>
          <Sidebar.Item className="text-[14px] text-[#6C7A85] hover:bg-[#00BF6D] hover:text-[#FEFEFE] rounded-full cursor-pointer">
            Burgers
          </Sidebar.Item>
          <Sidebar.Item className="text-[14px] text-[#6C7A85] hover:bg-[#00BF6D] hover:text-[#FEFEFE] rounded-full cursor-pointer">
            Pizzas
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
