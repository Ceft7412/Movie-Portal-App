import { useState, useEffect, useContext } from "react";
import { LayoutContext } from "./../layouts/MainLayout";
import { Link } from "react-router-dom";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

const TrendingMovies = ({ movies }) => {
  const isMoveOkay = useContext(LayoutContext);
  const [sortedTrendingMovies, setSortedTrendingMovies] = useState([]);

  useEffect(() => {
    const trendingsSorted = movies.sort(
      (a, b) => b.people_watch - a.people_watch
    );

    setSortedTrendingMovies(trendingsSorted.slice(0, 15));
  }, [movies]);
  return (
    <div className="relative text-white mt-10">
      <div className="mb-5">
        <span className="font-bold">Trending</span>
      </div>
      <div className="grid gap-y-5  grid-cols-1 min-[320px]:gap-y-5  min-[320px]:gap-x-3 min-[320px]:grid-cols-2 min-[450px]:grid-cols-3  min-[700px]:grid-cols-4  min-[950px]:grid-cols-5 min-[1024px]:grid-cols-6  min-[1700px]:grid-cols-8 min-[1900px]:grid-cols-9 min-[2200px]:grid-cols-11 min-[2500px]:grid-cols-12">
        {sortedTrendingMovies.map((movie, index) => (
          <div className="card relative group rounded-md mb-5" key={index}>
            <Link
              to={`/movie/watch-${movie.title.toLowerCase()}-${new Date(
                movie.date_released
              ).getFullYear()}-free-${index}`}
              key={index}
            >
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
                  src={movie.file_location}
                  alt={movie.title}
                />
              </div>

              <PlayArrowRoundedIcon
                style={{ fontSize: 70 }}
                className="text-white   opacity-0 group-hover:opacity-100 absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </Link>
            <div
              className="film-title truncate cursor-default"
              title={movie.title}
            >
              {movie.title}
            </div>
            <div className="film-details text-gray-400 flex justify-between text-xs">
              <div className="">
                {new Date(movie.date_released).getFullYear()}
              </div>
              <span className="">{movie.length}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMovies;
