import React from "react";

const Navlink = ({ nav }) => {
  const { name, path } = nav;
  return (
    <div>
      <li className="md:ml-8 text-xl md:my-0 my-5">
        {" "}
        <a
          className="text-gray-800 hover:text-indigo-800 duration-500"
          href={path}
        >
          {" "}
          {name}
        </a>{" "}
      </li>
    </div>
  );
};

export default Navlink;
