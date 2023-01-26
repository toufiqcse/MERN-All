import React from "react";

const Product = ({ product }) => {
  const { brand, image, phone_name } = product;
  return (
    <div className=" p-4 bg-gray-400 m-4 rounded-md ">
      <img className="mx-auto" src={image} alt="" />
      <p className="text-center text-3xl font-[Poppins] pt-2">{phone_name}</p>
      <p className="text-center text-xl font-[Poppins] pt-2">{brand}</p>
    </div>
  );
};

export default Product;
