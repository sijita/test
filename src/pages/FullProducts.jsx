import React from "react";
import { useParams } from "react-router-dom";
import FullProductCard from "../components/FullProductCard";
import HeaderSidebar from '../components/HeaderSidebar'

export default function FullProducts() {

  let { product } = useParams();

  console.log(product)

  return ( 
    <>
        <HeaderSidebar />
        <FullProductCard />
    </>
  );
}
