import { useEffect, useState } from "react";
import Movie from "./Movie";
import MovieLoader from "./MovieLoader";

const ShowMovies = ({ searchMovie }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMovies = async (url) => {
      const getMovies = await fetch(url);
      const response = await getMovies.json();
      setLoading(false);
      setMovies(response);
    };
    if (searchMovie.trim()) {
      fetchMovies(`https://api.tvmaze.com/search/shows?q=${searchMovie}`);
    } else {
      fetchMovies("https://api.tvmaze.com/shows");
    }
  }, [searchMovie]);
  return (
    <div className="mx-12 my-6 flex justify-evenly space-y-5 gap-4 flex-wrap">
      {loading && (
        <div className="mx-12 my-6 flex justify-evenly space-y-5 gap-4 flex-wrap">
          {Array.from({ length: 8 }, (_, index) => (
            <MovieLoader key={index} />
          ))}
        </div>
      )}
      {!loading &&
        movies.map((movie, index) => (
          <Movie key={movie?.id || index} movie={movie} />
        ))}
    </div>
  );
};
export default ShowMovies;
