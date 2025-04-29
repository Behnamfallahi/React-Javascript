import React from "react";
import Product from "./product";
import { PRODUCTS } from "../../data/products";
const Shop = () => {
  return (
    <React.Fragment>
      <h1>shop</h1>
      <div className="row">
        {PRODUCTS.map((productData) => {
          return <Product key={productData.id} data={productData} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Shop;
