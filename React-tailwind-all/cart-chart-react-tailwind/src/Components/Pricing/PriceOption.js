import React from "react";
import Feature from "./Feature";

const PriceOption = ({ product }) => {
  const { name, price, features } = product;
  return (
    <div className="">
      <div className="price bg-gray-400 mt-4 p-4 rounded-sm m-2 text-center">
        <p>
          <span className="text-5xl font-bold font-[Poppins ] text-white ">
            {price}
          </span>
          <span className="text-xl text-green-700">/mon</span>
        </p>
        <p className="text-3xl font-[Poppins] text-indigo-800 pt-3">{name}</p>

        {features.map((feature, indx) => (
          <Feature key={indx} feature={feature}></Feature>
        ))}

        <p className="text-white text-xl  p-4 bg-indigo-500 rounded-fill mt-3 hover:bg-indigo-700">
          Subscribe
        </p>
      </div>
    </div>
  );
};

export default PriceOption;
