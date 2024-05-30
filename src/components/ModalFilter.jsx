import React, { useState, useEffect } from "react";

export default function ModalFilter({ filterMovies, movies }) {
  const [inputYear, setInputYear] = useState("");
  const [uniqueYears, setUniqueYears] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [uniqueGenres, setUniqueGenres] = useState([]);
  console.log("selectedGenres: ", selectedGenres);
  useEffect(() => {
    const years = movies.map((movie) =>
      new Date(movie.date_released).getFullYear()
    );
    // what this does is basically using the set object to create a complete set of unique dates
    // the spread operator makes the set of unique values back into an array to use the sort method.
    const sortedYears = [...new Set(years)].sort((a, b) => b - a);
    setUniqueYears(["All", ...sortedYears]);

    const genres = movies.map((movie) => movie.genre);
    setUniqueGenres([...new Set(genres)]);
  }, [movies]);
  function handleFormSubmit(e) {
    e.preventDefault();
    filterMovies(inputYear, selectedGenres);
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
  return (
    <div className="text-black">
      <label>
        Filter by year:
        <form onSubmit={handleFormSubmit}>
          <select onChange={handleInputChange}>
            {uniqueYears.map((uniqueYear) => (
              <option key={uniqueYear} value={uniqueYear}>
                {uniqueYear}
              </option>
            ))}
          </select>

          {uniqueGenres.map((uniqueGenre) => (
            <>
              <label>{uniqueGenre}</label>
              <input
                type="checkbox"
                key={uniqueGenre}
                value={uniqueGenre}
                onChange={handleGenreChange}
              />
            </>
          ))}

          <button type="submit">Confirm</button>
        </form>
      </label>
    </div>
  );
}
