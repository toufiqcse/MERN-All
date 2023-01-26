import React from "react";
import banner from "../../images/banner/banner.png";
import tv from "../../images/banner/tv.png";

const Banner = () => {
  return (
    <div className=" m-2">
      <div className="relative">
        <img className="w-full h-96" src={banner} alt="" />

        <div className="absolute top-20 left-48">
          <span className="text-4xl font-[Roboto] font-bold text-cyan-300">
            Huge Savings
          </span>
          <span className="text-5xl font-[Roboto] font-bold text-white mx-2">
            on
          </span>

          <p className="text-5xl font-[Roboto] font-bold text-gray-100 pt-1">
            UHD Televisions
          </p>
          <p className="font-[Roboto] pt-3 text-white text-medium ">
            Sale up to 70% off on selected items*
          </p>
          <button className="outline-none border-2 rounded-full py-2 px-6 font-[Roboto] text-white mt-6 mx-1 hover:bg-cyan-400 duration-300 ease-in">
            Shop Now
          </button>
        </div>
        <div className="absolute top-5 right-64 w-1/4">
          <img src={tv} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
