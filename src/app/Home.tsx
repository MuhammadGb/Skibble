"use client";
import CartComponent from "@/component/Cart";
import FooterLayout from "@/component/Footer";
import NavbarLayout from "@/component/Navbar";
import Products from "@/component/Products";
import SeoMeta from "@/globals/SeoMeta";
import { useState, useEffect } from "react";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type CartItem = ProductType & {
  quantity: number;
};

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(15);
  const [count, setCount] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery: string = event?.target?.value.toLowerCase();
    setQuery(searchQuery);

    const filtered: ProductType[] = products.filter(
      (product: ProductType) =>
        product?.name?.toLowerCase().includes(searchQuery) ||
        product?.category?.toLowerCase().includes(searchQuery)
    );
    setFilteredProducts(filtered);
  };

  const fetchProducts = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/products?page=${page}&limit=${perPage}`
      );
      const data = await response.json();
      setProducts(data.data);
      setFilteredProducts(data.data);
      setCount(data.count);
    } catch (err) {
      console.log("Failed to fetch products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = "ShopEase - Online Shopping Made Easy";
  }, []);

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  return (
    <>
      <div className="w-full h-full text-black bg-white">
        <div>
          <NavbarLayout
            setQuery={setQuery}
            query={query}
            handleSearch={handleSearch}
          />
          <Products
            data={filteredProducts}
            count={count}
            loading={loading}
            setPage={setPage}
            page={page}
            setPerPage={setPerPage}
            perPage={perPage}
          />
          <FooterLayout />
          <CartComponent />
        </div>
      </div>
    </>
  );
}
