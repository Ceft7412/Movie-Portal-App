import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import DataMovies from "./movies.json";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";
import TvRoundedIcon from "@mui/icons-material/TvRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const Sidebar = ({ isOpen }) => {
  const [active, setActive] = useState("Home");

  const links = [
    { name: "Home", icon: <HomeRoundedIcon />, path: "dashboard" },
    { name: "Movies", icon: <MovieCreationRoundedIcon />, path: "/movies" },
    { name: "TV Shows", icon: <TvRoundedIcon />, path: "/tv-shows" },
  ];

  const dropDowns = [{ name: "Genre" }, { name: "Country" }];

  const [genres, setGenres] = useState([]);
  const [countries, setCountries] = useState([]);

  const [shownDropdown, setShownDropdown] = useState([]);
  const handleShow = (index) => {
    if (shownDropdown.includes(index)) {
      setShownDropdown(shownDropdown.filter((i) => i !== index));
    } else {
      setShownDropdown([...shownDropdown, index]);
    }
  };

  // getting unique and sorting alphabetically
  useEffect(() => {
    const uniqueGenres = Array.from(
      new Set(DataMovies.map((movie) => movie.genre))
    );

    const uniqueCountries = Array.from(
      new Set(DataMovies.map((movie) => movie.country))
    );

    const sortUniqueGenres = uniqueGenres.sort((a, b) => a.localeCompare(b));
    const sortUniqueCountries = uniqueCountries.sort((a, b) =>
      a.localeCompare(b)
    );

    setGenres(sortUniqueGenres);
    setCountries(sortUniqueCountries);

    console.log(sortUniqueGenres);
    console.log(sortUniqueCountries);
  }, []);

  return (
    <div
      className={`text-white overflow-auto scrollbar-thin scrollbar-thumb-gray-500 z-10 transition-transform duration-700 ease-in-out transform  sidebar pt-[66px] pb-[150px] left-0 top-0 bottom-0 fixed w-[250px] bg-slate-700 
  ${isOpen ? "translate-x-0 lg:translate-x-0" : "-translate-x-full"}`}
    >
      <div>
        <div className="text-base menu-list flex flex-col group pt-6 pb-6 border-b-[1px] border-gray-600">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`menu-item p-2 pl-5 flex gap-10  ${
                active === link.name ? "bg-gray-500" : "hover:bg-slate-900"
              }`}
              onClick={(e) => {
                if (active === link.name) {
                  e.preventDefault();
                } else {
                  setActive(link.name);
                }
              }}
            >
              <span className="text-white text-[xs]">{link.icon}</span>
              <span className="text-white">{link.name}</span>
            </Link>
          ))}
        </div>
        <div className="genre text-lg">
          {dropDowns.map((dropDown, index) => (
            <div key={index}>
              <div
                className="item flex flex-col p-2 border-b-[1px] border-gray-600"
                onClick={() => handleShow(index)}
              >
                <div className="flex justify-between">
                  <span>{dropDown.name}</span>
                  <KeyboardArrowDownRoundedIcon
                    className={` ${
                      shownDropdown.includes(index)
                        ? "transform rotate-180"
                        : ""
                    }`}
                  />
                </div>
                <div
                  key={index}
                  className={`grid grid-cols-2  text-xs gap-y-3 transition-all duration-200 overflow-hidden ${
                    shownDropdown.includes(index) ? "my-2 max-h-96" : "max-h-0"
                  }`}
                >
                  {dropDown.name === "Genre"
                    ? genres.map((genre) => (
                        <Link
                          to={`genre/${genre.toLowerCase()}`}
                          key={genre}
                          className="truncate"
                        >
                          {genre}
                        </Link>
                      ))
                    : null}
                  {dropDown.name === "Country"
                    ? countries.map((country) => (
                        <span key={country} className="truncate">
                          {country}
                        </span>
                      ))
                    : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-[14px] text-center p-5 mt-5">
          <span>2024 Ceft</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
