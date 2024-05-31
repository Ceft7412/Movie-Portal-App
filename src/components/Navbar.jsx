import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
const Navbar = ({ title, onMenuClick }) => {
  const [searchInputText, setSearchInputText] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const [movieFocused, setMovieFocused] = useState(false);
  const onEnter = (e) => {
    e.preventDefault();
    setSearchResults(searchInputText);
  };

  return (
    <div className="nav-wrapper font-body fixed w-full bg-slate-700 z-10 p-2  ">
      <div className="col flex flex-col lg:block lg:relative lg:pb-2">
        {/* first item */}
        <div className="nav-wrapper-fl flex items-center h-full text-white justify-between">
          <div className="left flex items-center gap-5">
            <div
              className="menu flex align-middle cursor-pointer "
              onClick={onMenuClick}
            >
              <MenuRoundedIcon />
            </div>
            <div className="logo flex align-middle">
              <span className="text-logo text-2xl whitespace-nowrap font-blackops">
                {title}
              </span>
            </div>
          </div>
          <div className="right sm:flex items-center gap-10 m-0"></div>
        </div>
        {/* second item */}
        <div className="item md:mr-0 relative lg:absolute lg:top-1 lg:left-[50%]">
          <form onSubmit={onEnter}>
            <input
              className="p-2 px-2 font-2 text-black w-full lg:w-[350px]   rounded-md pl-12 lg:mr-32 outline-0"
              placeholder="Search for a movie...    "
              id="movie"
              type="text"
              value={searchInputText}
              onChange={(e) => setSearchInputText(e.target.value)}
              onFocus={() => setMovieFocused(true)}
              onBlur={() => setMovieFocused(false)}
            />
            <button
              type="submit"
              className="absolute top-0 left-0  text-black hover:text-gray-700 w-12 h-full"
            >
              <SearchRoundedIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
