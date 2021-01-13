import React from "react";
import { useSelector } from "react-redux";
import FilmCard from "./FilmCard";

function SearchResults() {
  const searchResults = useSelector((state) => state.searchResults);

  console.log(searchResults);

  return (
    <div>
      <p>Search Results</p>
      {searchResults.map((film) => {
        return <FilmCard film={film} key={film.imdbID} />;
      })}
    </div>
  );
}

export default SearchResults;
