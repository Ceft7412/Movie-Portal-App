import React, { useState, useEffect } from "react";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
export default function ModalFilter({
  state,
  filterMovies,
  handleClose,
  uniqueYears,
  uniqueCountries,
  uniqueGenres,
}) {
  const [inputYear, setInputYear] = useState("All");
  console.log("State:", state);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  console.log("selectedCountries: ", selectedCountries);

  function handleFormSubmit(e) {
    e.preventDefault();
    filterMovies(inputYear, selectedGenres, selectedCountries);
    handleClose();
  }

  function handleInputChange(e) {
    setInputYear(e.target.value);
  }

  function handleGenreChange(e) {
    if (e.target.checked) {
      setSelectedGenres([...selectedGenres, e.target.value]);
    } else {
      setSelectedGenres(
        selectedGenres.filter((genre) => genre !== e.target.value)
      );
    }
  }

  function handleCountryChange(e) {
    if (e.target.checked) {
      setSelectedCountries([...selectedCountries, e.target.value]);
    } else {
      setSelectedCountries(
        selectedCountries.filter((country) => country !== e.target.value)
      );
    }
  }
  return (
    <div
      className={` text-black px-4 min-w-[320px] sm:px-10 md:px-32 lg:px-52 xl:px-72 items-center justify-center top-0 left-0 z-10 bg-black/30 w-full h-full fixed
      
      ${state ? "flex fadeIn" : "hidden"}`}
    >
      <div
        className={`${
          state ? "slideDown" : "slideUp"
        } bg-slate-700 w-[450px] text-white p-2 rounded`}
      >
        <h1 className="text-[24px] mb-2 font-semibold text-center">Filter</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="block border-b border-gray-300 py-2 flex justify-between gap-5 items-center">
            <label className="text-[18px]">Released:</label>
            <select
              className="text-black w-full border border-gray-500 rounded p-2"
              onChange={handleInputChange}
            >
              {uniqueYears.map((uniqueYear) => (
                <option key={uniqueYear} value={uniqueYear}>
                  {uniqueYear}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col border-b border-gray-300  py-2">
            <label className="text-[18px] mb-2">Genre:</label>
            <div className="grid grid-cols-2 gap-2">
              {uniqueGenres.map((uniqueGenre) => (
                <div key={uniqueGenre} className="flex gap-2">
                  <input
                    type="checkbox"
                    key={uniqueGenre}
                    value={uniqueGenre}
                    onChange={handleGenreChange}
                    className="form-checkbox h-5 w-5"
                  />
                  <label>{uniqueGenre}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="text-[18px] mb-2">Genre:</label>
            <div className="grid grid-cols-2 gap-2">
              {uniqueCountries.map((uniqueCountry) => (
                <div key={uniqueCountry} className="flex gap-2">
                  <input
                    key={uniqueCountry}
                    value={uniqueCountry}
                    onChange={handleCountryChange}
                    className="form-checkbox h-5 w-5"
                    type="checkbox"
                  />
                  <label>{uniqueCountry}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex pt-2 ">
            <div className="cursor-pointer w-[80%] bg-slate-800 text-white flex items-center justify-center py-2">
              <button type="submit" className="w-full h-full">
                <FilterAltRoundedIcon />
                <span>Filter</span>
              </button>
            </div>
            <div className="cursor-pointer w-[20%] bg-white text-black flex items-center justify-center">
              <button
                onClick={handleClose}
                type="button"
                className="w-full h-full"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
