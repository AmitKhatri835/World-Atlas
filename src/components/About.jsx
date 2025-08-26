import ApiData from "./ApiData.json";
import React from "react";

const About = () => {
  return (
    <div className="w-full my-[50px] h-full">
      <div className="w-[80%] xs:w-[85%] md:w-[70%] m-auto h-full">
        <h1 className="text-center text-3xl font-bold text-white">
          Here are the Intresting Facts
          <br />
          we're proud of
        </h1>
        <div className="gap-8 flex justify-evenly items-center flex-wrap my-8">
          {ApiData.map((value) => {
            const { id, countryName, capital, population, interestingFact } =
              value;
            return (
              <div
                className="card w-[80%] sm:w-[45%] md:w-[40%] cursor-pointer border px-4 py-2 border-gray-700 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-[20px] transition-all"
                key={id}
              >
                <div className="">
                  <h1 className="mb-3 text-[16px] sm:text-2xl">{countryName}</h1>
                  <div className="">
                    <p className="text-[12px]">
                      <span className="text-gray-500">Capital : </span>
                      {capital}
                    </p>
                  </div>
                  <div className="my-2">
                    <p className="text-[12px]">
                      <span className="text-gray-500">Population : </span>
                      {population}
                    </p>
                  </div>
                  <div className="my-2">
                    <p className="text-[12px] text-justify">
                      <span className="text-gray-500">Interesting Fact : </span>
                      {interestingFact}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
