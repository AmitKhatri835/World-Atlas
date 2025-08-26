import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <main className="w-full m-auto my-8 px-5">
      <div className="w-[60%] sm:w-[85%] md:[70%] lg:flex justify-between items-center m-auto">
        <div className="lg:w-[45%] ">
          <div className="">
            <h1 className="text-2xl sm:text-5xl font-bold">
              Explore The World, One Country at a Time.
            </h1>
          </div>
          <div className="my-8">
            <p className="text-gray-400 text-justify">
              Discover the History, Culture and beauty of Every Nation. Sort,
              search and filter through countries to find the details you need.
            </p>
          </div>
          <div className="">
            <NavLink to={"/country"}>
              <button className="bg-[#202020] cursor-pointer flex items-center justify-evenly text-white w-[180px] py-2 rounded-3xl transition-all">
                Start Exploring <FaLongArrowAltRight />
              </button>
            </NavLink>
          </div>
        </div>
        <div className="lg:w-[50%]">
          <img
            // className="w-[90%]"
            src="https://i.ytimg.com/vi/dRiTpr_kFZk/sddefault.jpg"
            alt="World"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
