// @ts-nocheck
import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();
  //   console.log(users);
  return (
    <div className="mt-4">
      <h1 className="text-center text-xl font-bold bg-gray-300 p-4">
        All Users
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
