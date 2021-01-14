import React from "react";
import { useSelector } from "react-redux";
import FilmCard from "./FilmCard";

function SearchResults() {
  const searchResults = useSelector((state) => state.searchResults);
  const searchError = useSelector((state) => state.searchError);

  console.log(searchError);
  console.log(searchResults);

  return (
    <div className="film-list-wrapper">
      <p>Search Results</p>
      <div className="films-container">
        {searchError !== null ? (
          <>
            <h2>{searchError}</h2> <h2>Try another search.</h2>
          </>
        ) : null}
        {searchResults.map((film) => {
          return <FilmCard film={film} key={film.imdbID} />;
        })}
      </div>
    </div>
  );
}

export default SearchResults;
