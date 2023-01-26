// @ts-nocheck
import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const products = useLoaderData();
  const allProduct = products.data;
  //   console.log(allProduct);
  return (
    <div>
      <p className="p-4 text-center text-5xl mt-4 text-slate-600 bg-gray-300">
        Products
      </p>
      <div className="grid grid-cols-4 gap-4">
        {allProduct.map((product) => (
          <Product key={product.slug} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
