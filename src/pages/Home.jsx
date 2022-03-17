import React from "react";
import Products from "../components/Products";
import HeaderSidebar from "../components/HeaderSidebar";
import Footer from "../components/Footer";
import { useProducts } from "../hooks/getProducts";

export default function Home() {

  const { isLoading } = useProducts();

  return (
    <>
      <HeaderSidebar />
      <Products />
      {
        !isLoading ? <Footer /> : null
      }
    </>
  );
}
