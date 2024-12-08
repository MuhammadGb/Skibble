"use client";

import { useState, useMemo, Dispatch, SetStateAction } from "react";
import ProductCard from "./ProductCard";
import { ProductType } from "@/app/Home";
import { Button, Pagination, Spinner } from "flowbite-react";
import EmptyState from "./EmptyState";

type ProductPropType = {
  data: ProductType[];
  count: number;
  page: number;
  loading: boolean;
  setPage: Dispatch<SetStateAction<number>>;
  perPage: number;
  setPerPage: Dispatch<SetStateAction<number>>;
};

export default function Products(props: ProductPropType) {
  const { data, setPage, loading, page, count, perPage } = props;
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number] | null>(null);
  const [sortOption, setSortOption] = useState<"name" | "price" | null>(null);

  const filteredProducts = useMemo(() => {
    let filtered = data;

    if (categoryFilter) {
      filtered = filtered.filter(
        (product) => product?.category === categoryFilter
      );
    }

    if (priceRange) {
      filtered = filtered.filter(
        (product) =>
          product?.price >= priceRange[0] && product?.price <= priceRange[1]
      );
    }

    if (sortOption) {
      filtered = [...filtered].sort((a, b) =>
        sortOption === "name" ? a.name.localeCompare(b.name) : a.price - b.price
      );
    }

    return filtered;
  }, [data, categoryFilter, priceRange, sortOption]);

  const onPageChange = (page: number) => setPage(page);

  return (
    <div className="relative top-24">
      <h1 className="m-8 mb-6 text-2xl font-bold text-black">Products</h1>
      <div className="flex items-end justify-end p-8 space-x-4 bg-gray-100">
        <select
          onChange={(e) =>
            setSortOption(e.target.value as "name" | "price" | null)
          }
          className="h-12 p-2 border rounded-md"
          aria-label="Sort by"
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
        <select
          onChange={(e) => setCategoryFilter(e.target.value || null)}
          className="h-12 p-2 border rounded-md"
          aria-label="Filter by category"
        >
          <option value="" disabled>
            Filter by Categories
          </option>
          <option value="">All Categories</option>
          {[...new Set(data?.map((product) => product?.category))]?.map(
            (category) => (
              <option key={category} value={category}>
                {category}
              </option>
            )
          )}
        </select>
        <div className="p-2 bg-white border border-black rounded-md cursor-pointer ">
          <div className="flex items-center justify-between gap-4 mb-3">
            <label htmlFor="price" className="mb-2">
              Filter by Price Range
            </label>
            {priceRange !== null ? (
              <Button
                size="xs"
                color="light"
                aria-label="Remove Filter"
                className="font-semibold"
                onClick={() => setPriceRange(null)}
              >
                Clear
              </Button>
            ) : (
              " "
            )}
          </div>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="0"
              max="1500"
              onChange={(e) => setPriceRange([0, parseInt(e.target.value, 10)])}
              aria-label="Filter by price"
            />{" "}
            <div className="flex items-center gap-1 p-2 border">
              <span className="font-semibold ">$0</span>
              <span className="font-semibold ">-</span>
              <span className="font-semibold ">
                ${priceRange?.slice(1, priceRange?.length) || 0}
              </span>
            </div>
          </div>
        </div>
      </div>
      {filteredProducts?.length && !loading ? (
        <div className="flex flex-wrap justify-start w-full gap-12 px-8 py-4 mb-6 bg-gray-100">
          {filteredProducts?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      ) : loading ? (
        <div className="flex items-center justify-center w-screen h-[30vh]">
          <Spinner aria-label="Loading indicator" size="xl" />
        </div>
      ) : !filteredProducts?.length && !loading ? (
        <EmptyState />
      ) : (
        ""
      )}
      {filteredProducts?.length ? (
        <div className="flex items-end justify-end gap-4 mx-6">
          <div className="text-sm font-semibold text-gray-500">
            Showing {(page - 1) * perPage + 1} to{" "}
            {page < Math.ceil(count / perPage)
              ? filteredProducts?.length * page
              : count}{" "}
            of {count} Entries
          </div>
          <Pagination
            layout="pagination"
            className="flex items-end justify-end "
            currentPage={page}
            totalPages={Math.ceil(count / perPage)}
            showIcons
            onPageChange={onPageChange}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
