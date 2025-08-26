import React from "react";
import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <>
      <li>
        <div className="cursor-pointer border p-[20px] my-4 border-gray-700 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-[20px] transition-all">
          <img
            className="max-w-[200px] max-h-[150px]"
            src={flags.svg}
            alt={flags.alt}
          />
          <div className="my-1">
            <div className="text-2xl">
              {name.common.length > 10
                ? name.common.slice(0, 10) + "..."
                : name.common}
            </div>
          </div>
          <p className="text-[12px]">
            <span className="text-[14px] text-gray-500">Population:</span>
            {population.toLocaleString()}
          </p>
          <p className="text-[12px]">
            <span className="text-[14px] text-gray-500">Region:</span>
            {region}
          </p>
          <p className="text-[12px]">
            <span className="text-[14px] text-gray-500">Capital:</span>
            {capital[0]}
          </p>
          <NavLink to={`/country/${name.common}`}>
            <button className="bg-[#202020] cursor-pointer text-[12px] my-4 text-white py-2 px-3 rounded-3xl transition-all">
              Read More
            </button>
          </NavLink>
        </div>
      </li>
    </>
  );
};

export default CountryCard;
