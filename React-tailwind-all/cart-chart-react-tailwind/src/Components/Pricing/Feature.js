import React from "react";

const Feature = ({ feature }) => {
  return (
    <div className=" flex mt-1 text-left">
      <li className="text-medium ">{feature}</li>
    </div>
  );
};

export default Feature;
