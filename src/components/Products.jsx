import React from "react";
import { useProducts } from "../hooks/getProducts";
import ProductsCards from "./ProductsCards";
import styles from "../styles/grid.module.css";

export default function Products() {
  const { products, isLoading } = useProducts();

  return (
    <>
      <div className="m-5">
        <h2
          className="fw-bold text-light text-center"
          style={{ fontSize: "4rem" }}
        >
          Productos
        </h2>
      </div>
      <div className="p-5">
        <ul className={styles.productsGrid}>
          {!isLoading
            ? products["products"].map((product) => {
                return (
                  <ProductsCards
                    className="text-light"
                    key={product.id}
                    product={product}
                  />
                );
              })
            : null}
        </ul>
      </div>
    </>
  );
}
