import React, { useEffect, useState } from "react";
import { useProducts } from "../hooks/getProducts";
import { useParams } from "react-router-dom";
import FullProductCard from "./FullProductCard";

export default function FullProduct() {
  const [items, setItems] = useState([]);
  const { products, isLoading } = useProducts();

  let { id } = useParams();

  useEffect(() => {
    if (!isLoading) {
      setItems(products.products.filter((product) => product.id == id));
    }
  }, [id, isLoading]);

  return (
    <section>
      <div>
        <div>
          {!isLoading
            ? items.map((item) => {
                return <FullProductCard key={item.id} item={item} />;
              })
            : null}
        </div>
      </div>
    </section>
  );
}
