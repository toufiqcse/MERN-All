import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <p>Copyright All right reserved {year}</p>
    </div>
  );
};

export default Footer;
