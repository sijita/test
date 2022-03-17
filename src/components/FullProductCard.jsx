import React from "react";
import "../styles/fullcard.module.css";
import { useProducts } from "../hooks/getProducts";

export default function FullProductCard() {

  const { products, isLoading } = useProducts();

  if(!isLoading){
    console.log(products["products"][0].title)
  }

  return (
    <section>
        <div>
            <div>

            </div>
            <div>

            </div>
        </div>
    </section>
  );
}
