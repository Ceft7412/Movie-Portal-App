import { useState, useEffect, useContext } from "react";
import movies from "./movies.json";
// icons

import { LayoutContext } from "./../layouts/MainLayout";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import ModalFilter from "./ModalFilter";
import { Link } from "react-router-dom";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
export default function AllFilm() {
  const isMoveOkay = useContext(LayoutContext);
  const [show, setShow] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  console.log("Filtered Movies", filteredMovies);
  const handleCloseModal = () => {
    setShow(false);
  };
  const [uniqueYears, setUniqueYears] = useState([]);
  const [uniqueCountries, setUniqueCountries] = useState([]);
  const [uniqueGenres, setUniqueGenres] = useState([]);
  useEffect(() => {
    const years = movies.map((movie) =>
      new Date(movie.date_released).getFullYear()
    );
    // what this does is basically using the set object to create a complete set of unique dates
    // the spread operator makes the set of unique values back into an array to use the sort method.
    const sortedYears = [...new Set(years)].sort((a, b) => b - a);
    const latestFiveYears = sortedYears.slice(0, 5);
    setUniqueYears(["All", ...latestFiveYears, "Older"]);

    const genres = movies.map((movie) => movie.genre);
    setUniqueGenres([...new Set(genres)]);

    const countries = movies.map((movie) => movie.country);
    setUniqueCountries([...new Set(countries)]);
  }, []);

  function filterMovies(year, genres, countries) {
    let filteredMovies = movies;

    if (year !== "All") {
      if (year === "Older") {
        // Filter movies that are older than the latest five years
        const latestFiveYears = uniqueYears.slice(1, 6); // Exclude "All" and "Older"
        filteredMovies = filteredMovies.filter(
          (movie) =>
            !latestFiveYears.includes(
              new Date(movie.date_released).getFullYear()
            )
        );
      } else {
        // Filter movies by the selected year
        filteredMovies = filteredMovies.filter(
          (movie) =>
            new Date(movie.date_released).getFullYear() === parseInt(year)
        );
      }
    }

    if (genres.length > 0) {
      filteredMovies = filteredMovies.filter((movie) =>
        genres.includes(movie.genre)
      );
    }

    if (countries.length > 0) {
      filteredMovies = filteredMovies.filter((movie) =>
        countries.includes(movie.country)
      );
    }
    setFilteredMovies(filteredMovies);
  }

  return (
    <div>
      <div className="mb-2 flex justify-between items-center">
        <h2 className="text-[28px] font-semibold">Movies</h2>
        <div
          className="cursor-pointer text-black flex items-center py-1 px-3 bg-white rounded-full"
          onClick={() => setShow(true)}
        >
          <FilterAltRoundedIcon />
          <span className="hidden md:block">Filter</span>
        </div>
        <ModalFilter
          filterMovies={filterMovies}
          movies={movies}
          state={show}
          handleClose={handleCloseModal}
          uniqueYears={uniqueYears}
          uniqueCountries={uniqueCountries}
          uniqueGenres={uniqueGenres}
        />
      </div>
      <div className="filter-area"></div>
      <div className="grid gap-y-5  grid-cols-1 min-[320px]:gap-y-5  min-[320px]:gap-x-3 min-[320px]:grid-cols-2 min-[450px]:grid-cols-3  min-[700px]:grid-cols-4  min-[950px]:grid-cols-5 min-[1024px]:grid-cols-6  min-[1700px]:grid-cols-8 min-[1900px]:grid-cols-9 min-[2200px]:grid-cols-11 min-[2500px]:grid-cols-12">
        {filteredMovies.map((filteredMovie) => (
          <div
            className="card relative group rounded-md mb-5"
            key={filteredMovie.title}
          >
            <Link>
              <div
                className={` group rounded-md min-[320px]:w-full min-[320px]:h-[200px] min-[380px]:h-[240px] min-[450px]:h-[200px] min-[560px]:h-[230px] min-[630px]:h-[250px] min-[700px]:h-[220px] min-[830px]:h-[250px] min-[950px]:h-[230px] min-[1133px]:h-[260px] ${
                  isMoveOkay
                    ? "min-[1200px]:h-[240px]"
                    : "min-[1200px]:h-[300px]"
                } before:absolute before:inset-0 `}
              >
                <img
                  className={`rounded-md w-[150px] min-h-[80px] min-w-[130px] min-[320px]:w-full min-[320px]:h-[200px] min-[380px]:h-[240px] min-[450px]:h-[200px] min-[560px]:h-[230px] min-[630px]:h-[250px] min-[700px]:h-[220px] min-[830px]:h-[250px] min-[950px]:h-[230px] min-[1133px]:h-[260px] ${
                    isMoveOkay
                      ? "min-[1200px]:h-[240px]"
                      : "min-[1200px]:h-[300px]"
                  } opacity-1 group-hover:opacity-70 `}
                  src={filteredMovie.file_location}
                  alt={filteredMovie.title}
                />
              </div>
              <PlayArrowRoundedIcon
                style={{ fontSize: 70 }}
                className="text-white   opacity-0 group-hover:opacity-100 absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </Link>
            <div
              className="film-title truncate cursor-default"
              title={filteredMovie.title}
            >
              {filteredMovie.title}
            </div>
            <div className="film-details text-gray-400 flex justify-between text-xs">
              <div className="">
                {new Date(filteredMovie.date_released).getFullYear()}
              </div>
              <span className="">{filteredMovie.length}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
