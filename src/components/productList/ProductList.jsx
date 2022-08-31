import React from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div id="product">
      <div className="pl-texts">
        <h1 className="pl-title">Portfolio</h1>
        <p className="pl-desc">
          Below are the projects I've created throughout the program. They
          showcase my growth and skills.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
