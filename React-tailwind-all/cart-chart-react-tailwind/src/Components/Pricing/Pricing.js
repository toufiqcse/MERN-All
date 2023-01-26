import React from "react";
import products from "../../data/products";
import PriceOption from "./PriceOption";

const Pricing = () => {
  return (
    <div className="z-auto">
      <p className="text-5xl font-bold bg-gray-400 p-10 text-white text-center">
        Best Deal of the Down..!
      </p>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  rounded-sm">
        {products.map((product) => (
          <PriceOption key={product.ser} product={product}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
