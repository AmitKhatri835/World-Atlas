import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "./RestApi";
import CountryCard from "./CountryCard";
import SearchFilter from "./SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getCountryData().then(() => {
      startTransition(async () => {
        const res = await getCountryData();
        setCountries(res.data);
      });
    });
  }, []);

  const searchCountry = (country) => {
    if (search) {
      const searchLower = search.toLowerCase();
      return country.name.common.toLowerCase().includes(searchLower);
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return true;
    return country.region.toLowerCase() === filter.toLowerCase();
  };

  const filterCountry = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  const displayCountries = [];
  let i = 0;
  while (i < filterCountry.length && i < 10) {
    displayCountries.push(filterCountry[i]);
    i++;
  }

  if (isPending)
    return (
      <div className="h-dvh flex justify-center items-center">
        <h1 className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"></h1>
      </div>
    );

  return (
    <div className="w-[100%] xs:w-[85%] md:[70%] m-auto my-16">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="flex justify-evenly items-center flex-wrap gap-6">
        {displayCountries.map((country, index) => {
          return <CountryCard country={country} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default Country;
