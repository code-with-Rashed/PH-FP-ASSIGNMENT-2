import { useEffect, useState } from "react";
import Movie from "./Movie";
import MovieLoader from "./MovieLoader";

const ShowMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMovies = async () => {
      const getMovies = await fetch("https://api.tvmaze.com/shows");
      const response = await getMovies.json();
      setLoading(false);
      setMovies(response);
    };
    fetchMovies();
  }, []);
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
        movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
    </div>
  );
};
export default ShowMovies;
