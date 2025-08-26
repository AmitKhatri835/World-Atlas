import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "./RestApi";

const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      setCountry(res.data[0]);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [params.id]);

  if (isPending)
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-white border-t-gray-500 rounded-full animate-spin"></div>
      </div>
    );

  return (
    <>
      <div className="w-[100%] flex justify-center items-center m-auto my-16 border py-10 border-gray-700 bg-gradient-to-br from-gray-900 via-black border-s-0 border-e-0 to-gray-900 transition-all">
        {country && (
          <div className="w-full md:w-[50%] flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-[50%] md:w-[40%] flex-shrink-0">
                <img
                  className=""
                  src={country.flags.svg}
                  alt={country.flags.alt}
                />
              </div>
              <div className="">
                <h1 className="mt-3 text-3xl">{country.name.official}</h1>
                <p className="text-[12px] mt-3">
                  <span className="text-[14px] pe-1 text-gray-500">
                    Native Names:
                  </span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p className="text-[12px] mt-3">
                  <span className="text-[14px] pe-1 text-gray-500">
                    Population:
                  </span>
                  {country.population.toLocaleString()}
                </p>
                <p className="text-[12px] mt-3">
                  <span className="text-[14px] pe-1 text-gray-500">
                    Region:
                  </span>
                  {country.region}
                </p>
                <p className="text-[12px] mt-3">
                  <span className="text-[14px] pe-1 text-gray-500">
                    Sub Region:
                  </span>
                  {country.subregion}
                </p>
                <p className="text-[12px] mt-3">
                  <span className="text-[14px] pe-1 text-gray-500">
                    Capital:
                  </span>
                  {country.capital}
                </p>
                <p className="text-[12px] mt-3">
                  <span className="text-[14px] pe-1 text-gray-500">
                    Top Level Domain:
                  </span>
                  {country.tld[0]}
                </p>
                <p className="text-[12px] mt-3">
                  <span className="text-[14px] pe-1 text-gray-500">
                    Currencies:
                  </span>
                  {Object.keys(country.currencies)
                    .map((key) => country.currencies[key].name)
                    .join(", ")}
                </p>
                <p className="text-[12px] mt-3">
                  <span className="text-[14px] pe-1 text-gray-500">
                    Language:
                  </span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <NavLink to={`/country`}>
                <button className="bg-[#202020] cursor-pointer text-[12px] sm:text-[16px] my-6 text-white py-3 px-16 rounded-3xl transition-all">
                  Go Back
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CountryDetails;
