// @ts-nocheck
import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const userDetails = useLoaderData();
  //   console.log(userDetails);
  return (
    <div className="mt-4">
      <div className="w-50 bg-slate-500 text-white font-bold">
        <h3 className="text-2xl">
          {" "}
          <span>Details of</span>{" "}
          <span className="text-slate-100">{userDetails.name}</span>
        </h3>
        <p>Call him/her: {userDetails.phone}</p>
      </div>
    </div>
  );
};

export default UserDetails;
