import React from "react";
import { useParams } from "react-router-dom";
import FullProductCard from "../components/FullProduct";
import HeaderSidebar from '../components/HeaderSidebar'

export default function FullProducts() {

  let { id, product } = useParams();

  return ( 
    <>
        <HeaderSidebar />
        <FullProductCard />
    </>
  );
}
