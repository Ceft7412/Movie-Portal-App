import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Movies = () => {
  const [searchInputText, setSearchInputText] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [movieFocused, setMovieFocused] = useState(false);
  const onEnter = (e) => {
    e.preventDefault();
    setSearchResults(searchInputText);
  };
  return (
    <>
      <div className="flex flex-col w-80 py-10">
        <div className="row w-full relative">
          <form onSubmit={onEnter}>
            <input
              className="p-2 px-2 font-2 w-full pr-12"
              id="movie"
              type="text"
              value={searchInputText}
              onChange={(e) => setSearchInputText(e.target.value)}
              onFocus={() => setMovieFocused(true)}
              onBlur={() => setMovieFocused(false)}
            />
            <label
              htmlFor="movie"
              className={`absolute left-2 duration-200 ${
                movieFocused || searchInputText
                  ? "text-white -top-6 left-1"
                  : "top-2"
              }`}
            >
              {movieFocused ? "Search Movie" : "Search movie..."}
            </label>

            <button
              type="submit"
              className="absolute top-0 right-0  hover:text-gray-700 w-12 h-full"
            >
              <SearchRoundedIcon />
            </button>
          </form>
        </div>
        <div className="text text-white">{searchResults}</div>
      </div>
    </>
  );
};

export default Movies;
