import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, email, username, id } = user;
  return (
    <div className="p-4 bg-slate-400 m-3 rounded-md">
      <h1 className="text-2xl font-[Poppins] ">{name}</h1>
      <p className="text-xl">{email}</p>
      <p>
        User-Name:
        <Link to={`/users/${id}`}>
          <span className="text-blue-800">{username}</span>
        </Link>{" "}
      </p>
    </div>
  );
};

export default User;
