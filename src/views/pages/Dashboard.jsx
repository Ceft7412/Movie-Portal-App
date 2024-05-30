import React, { useContext } from "react";
import { LayoutContext } from "../../layouts/MainLayout";
import NewMovies from "../../components/NewMovies";
import TrendingMovies from "../../components/TrendingMovies";

import movies from "../../components/movies.json";
const CardsContainer = () => {
  const isMoveOkay = useContext(LayoutContext);
  console.log(`Dashboard: ${isMoveOkay}`);
  return (
    <div
      className={`w-full h-full flex flex-col 
    ${isMoveOkay ? "lg:pl-5" : "pl-0"}`}
    >
      <NewMovies movies={movies} />

      <TrendingMovies movies={movies} />
    </div>
  );
};

export default CardsContainer;
