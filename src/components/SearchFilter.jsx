import React from "react";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const sortCountries = (value) => {
    if (!["asc", "desc"].includes(value)) return;

    const sorted = [...countries].sort((a, b) =>
      value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common)
    );

    setCountries(sorted);
  };
  return (
    <div className="w-[50%] sm:w-[85%] md:w-[80%] m-auto my-12">
      <div className="w-full lg:flex justify-between lg:justify-center items-center">
        <div className="w-[30%] sm:w-[100%] lg:w-[30%]">
        <input
          className="bg-gray-800 border sm:w-[100%] border-gray-700 rounded-lg px-6 py-3 focus:outline-none focus:border-amber-500 transition-colors text-white placeholder-gray-400"
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={handleInputChange}
        />
        </div>
        <div className="lg:w-[40%] flex justify-between items-center my-4 mx-3">
        <button
          onClick={() => sortCountries("asc")}
          className="cursor-pointer bg-gray-800 border border-gray-700 rounded-lg px-6 py-3 focus:outline-none focus:border-amber-500 transition-colors text-white"
        >
          Asc
        </button>
        <button
          onClick={() => sortCountries("desc")}
          className="cursor-pointer bg-gray-800 border border-gray-700 rounded-lg px-6 py-3 focus:outline-none focus:border-amber-500 transition-colors text-white"
        >
          Desc
        </button>
        </div>
        <div className="w25%] sm:w-[100%] lg:w-[25%]">
        <select
          value={filter}
          onChange={handleSelectChange}
          className="bg-gray-800 border sm:w-[100%] border-gray-700 rounded-lg px-6 py-3 focus:outline-none focus:border-amber-500 transition-colors text-white cursor-pointer"
        >
          <option value="all">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="americas">Americas</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
