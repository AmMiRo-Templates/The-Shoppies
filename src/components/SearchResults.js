import React from "react";
import { useSelector } from "react-redux";
import FilmCard from "./FilmCard";

function SearchResults() {
  const searchResults = useSelector((state) => state.searchResults);

  console.log(searchResults);

  return (
    <div className="film-list-wrapper">
      <p>Search Results</p>
      <div className="films-container">
        {searchResults.map((film) => {
          return <FilmCard film={film} key={film.imdbID} />;
        })}
      </div>
    </div>
  );
}

export default SearchResults;
