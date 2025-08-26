import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#0f0f0f] ">
        <div className="w-[90%] sm:w-[85%] md:w-[70%] m-auto">
          <div className="py-[10px] text-center flex flex-col xs:flex-row justify-between sm:justify-evenly items-center">
            <div className="flex justify-evenly items-center">
              <span className="text-blue-500 text-2xl sm:text-4xl px-2">
                <FaLocationDot />
              </span>
              <div className="">
                <p className="">Find Us</p>
                <p className="text-[12px] text-gray-500">
                  Jodhpur, Rajasthan, India
                </p>
              </div>
            </div>
            <div className="my-3 flex justify-evenly items-center">
              <span className="text-blue-500 text-2xl sm:text-4xl px-2">
                <IoCall />
              </span>
              <div className="">
                <p className="">Call Us</p>
                <p className="text-[12px] text-gray-500">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex justify-evenly items-center">
              <span className="text-blue-500 text-2xl sm:text-4xl px-2">
                <IoMdMail />
              </span>
              <div className="">
                <p className="">Mail Us</p>
                <p className="text-[12px] text-gray-500">info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#202020]">
        <div className="w-[90%] sm:w-[85%] md:w-[70%] m-auto py-[15px] sm:flex justify-evenly items-center">
          <div className="sm:w-[40%] flex justify-center">
            <span className="text-[12px] text-center text-gray-600">CopyRight © 2024 World Atlas. All Rights Reserved</span>
          </div>
          <div className="sm:w-[50%] text-gray-500 text-[14px]">
            <ul className="flex justify-evenly items-center list-none">
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/about">
                <li>About</li>
              </NavLink>
              <NavLink to="/country">
                <li>Country</li>
              </NavLink>
              <NavLink to="/contact">
                <li>Contact</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
