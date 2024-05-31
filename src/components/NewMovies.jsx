import { useState, useEffect, useRef } from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { Link } from "react-router-dom";

const NewMovies = ({ movies }) => {
  const [sortedMovies, setMovies] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const scrollRef = useRef();

  useEffect(() => {
    const sorted = movies.sort(
      (a, b) => new Date(b.date_released) - new Date(a.date_released)
    );
    setMovies(sorted.slice(0, 15));
  }, [movies]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(scrollRef.current.scrollLeft);
      checkScrollPosition();
    };

    const checkScrollPosition = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      console.log(scrollRef);
      setAtStart(scrollLeft === 0);
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
      console.log("Scroll Position:", scrollLeft);
      console.log("At Start:", scrollLeft === 0);
      console.log("At End:", scrollLeft + clientWidth >= scrollWidth);
    };

    if (scrollRef.current) {
      checkScrollPosition();
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [sortedMovies]);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
    console.log("Scrolled by:", scrollOffset);
    console.log("New Scroll Position:", scrollRef.current.scrollLeft);
    setTimeout(checkScrollPosition, 100);
  };

  return (
    <div className="relative text-white">
      <div
        className="row-data flex gap-5 text-white max-[767px]:overflow-auto max-[767px]:overflow-x-scroll truncate  scroll-smooth"
        ref={scrollRef}
      >
        {sortedMovies.map((movie, index) => (
          <div
            className="card w-[230px] rounded group transform transition-transform duration-200 hover:scale-100  hover:-translate-y-[2px]"
            key={index}
          >
            <Link
              to={`/movie/watch-${movie.title.toLowerCase()}-${new Date(
                movie.date_released
              ).getFullYear()}-free-${index}`}
              key={index}
            >
              <div
                className="film-poster rounded relative w-[230px] h-[350px] before:absolute before:inset-0 before:bg-black before:opacity-0  group-hover:before:opacity-20 "
                style={{
                  backgroundImage: `url(${movie.file_location})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                title={movie.title}
              ></div>
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
      <div className="max-[767px]:hidden md:block">
        <div
          className={`cursor-pointer  transition  duration-150 ease-in-out  hover:bg-red-500 absolute top-[40%] left-0 bg-gray-500 p-2 rounded-full flex items-center justify-center ${
            atStart ? "hidden" : ""
          } `}
          onClick={() => scroll(-300)}
        >
          <ArrowBackIosNewRoundedIcon />
        </div>
      </div>
      <div className="max-[767px]:hidden md:block">
        <div
          className={`cursor-pointer transition duration-150 ease-in-out hover:bg-red-500 absolute top-[40%] right-0 bg-gray-500 p-2 rounded-full flex items-center justify-center ${
            atEnd ? "hidden" : ""
          }`}
          onClick={() => scroll(300)}
        >
          <ArrowForwardIosRoundedIcon />
        </div>
      </div>
    </div>
  );
};

export default NewMovies;
