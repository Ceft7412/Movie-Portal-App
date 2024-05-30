import React, { useContext } from "react";
import { LayoutContext } from "../../layouts/MainLayout";
import movies from "../../components/movies.json";

import AllFilm from "../../components/AllFilm";

const Movies = ({ movies }) => {
  const isMoveOkay = useContext(LayoutContext);

  return (
    <div>
      <div
        className={`text-white w-full h-full flex flex-col 
    ${isMoveOkay ? "lg:pl-5" : "pl-0"}`}
      >
        <AllFilm movies={movies} />
      </div>
    </div>
  );
};

export default Movies;
