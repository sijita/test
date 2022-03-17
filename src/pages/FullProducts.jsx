import React from "react";
import Footer from "../components/Footer";
import FullProductCard from "../components/FullProduct";
import HeaderSidebar from '../components/HeaderSidebar'
import { useProducts } from "../hooks/getProducts";

export default function FullProducts() {

  const { isLoading } = useProducts();

  return ( 
    <>
        <HeaderSidebar />
        <FullProductCard />
        {
          !isLoading ? <Footer /> : null
        }
    </>
  );
}
