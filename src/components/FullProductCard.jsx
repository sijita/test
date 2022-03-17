import React from "react";
import styles from "../styles/fullproductcards.module.css";

export default function FullProductCard({ item }) {
  return (
    <div
      key={item.id}
      className="p-md-5 m-5 d-flex flex-column align-items-center gap-5"
    >
      <div className={`${styles.card} p-5`}>
        <img
          src={item.image}
          alt={item.title}
          className={`d-block mx-auto ${styles.logo}`}
        />
        <div className={`${styles.paragrahp}`}>
          <p
            className="text-light fs-2 text-center my-5"
            style={{ fontWeight: "600" }}
          >
            {item.title}
          </p>
          <p className="text-light mt-5 lead" style={{ textAlign: "justify" }}>
            {item.longDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
