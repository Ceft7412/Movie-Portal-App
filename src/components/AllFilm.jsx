import React, { useState } from "react";
import movies from "./movies.json";
// icons
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import ModalFilter from "./ModalFilter";

export default function AllFilm() {
  const [show, setShow] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  console.log("Filtered Movies", filteredMovies);

  function filterMovies(year, selectedGenres) {
    const result = movies.filter((movie) => {
      const movieYear = new Date(movie.date_released).getFullYear();
      const isYearMatch = year === "All" || movieYear === parseInt(year, 10);
      const isGenreMatch =
        selectedGenres.length === 0 || selectedGenres.includes(movie.genre);
      return isYearMatch && isGenreMatch;
    });
    setFilteredMovies(result);
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-[28px] font-semibold">Movies</h2>
        <div
          className="cursor-pointer text-black flex items-center py-1 px-3 bg-white rounded-full"
          onClick={() => setShow(true)}
        >
          <FilterAltRoundedIcon />
          <span className="hidden md:block">Filter</span>
        </div>
        <ModalFilter filterMovies={filterMovies} movies={movies} state={show} />
      </div>
      <div className="filter-area"></div>
      <div className="all-movies">
        {filteredMovies.map((filteredMovie) => (
          <div className="" key={filteredMovie.title}>
            {filteredMovie.title}
          </div>
        ))}
      </div>
    </div>
  );
}
