const Searchbar = ({ setSearchMovie }) => {
  // handle debounce for movie search keyword
  const debounceSearch = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
  const searchMovieNow = (searchedText) => {
    setSearchMovie(searchedText);
  };
  const doSearch = debounceSearch(searchMovieNow, 1000);

  const movieSearching = (e) => {
    if (e.key === "Enter") {
      setSearchMovie(e.target.value);
    } else if (!e.target.value) {
      setSearchMovie("");
    } else {
      doSearch(e.target.value);
    }
  };
  
  return (
    <div className="mb-3 flex justify-center py-10 bg-sky-50">
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          required
          placeholder="Search for a movie..."
          onKeyUp={movieSearching}
        />
      </label>
    </div>
  );
};
export default Searchbar;
