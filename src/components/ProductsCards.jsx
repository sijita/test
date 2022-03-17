import React from "react";
import styles from '../styles/products.module.css'
import { Link } from "react-router-dom";

export default function ProductsCards({ product }) {
  return (
    <li className={`gap-4 text-light d-flex flex-column justify-content-center p-5 ${styles.card}`}>
      <img className={`align-self-center ${styles.img}`} src={product.image} alt={product.title} />
      <div className="">
        {product.title}
      </div>
      <div className={`fs-6 px-1 lead ${styles.shortDescription}`}>
        {product.shortDescription}
      </div>
      <Link 
        to={`/home/${product.id}${product.path}`} 
        style={{color: '#FFF', textDecoration: 'none'}}
        className="mt-auto"
      >
        <button 
          className="w-100 btn btn-dark border-0" 
          style={{backgroundColor: '#232323', fontWeight: '500'}}
        >
            Ver más
        </button>
      </Link>
    </li>
  );
}
