import { useState } from "react";
import Searchbar from "../components/Searchbar";
import ShowMovies from "../components/ShowMovies";

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState("");
  return (
    <>
      <Searchbar setSearchMovie={(movie) => setSearchMovie(movie)} />
      <ShowMovies searchMovie={searchMovie} />
    </>
  );
};
export default Movies;
