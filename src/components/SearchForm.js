import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getFilms } from "../store/films/filmsActions";

function SearchForm() {
  const dispatch = useDispatch();

  const [filmTitle, setFilmTitle] = useState("");

  const handleChanges = (e) => {
    setFilmTitle(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    if (filmTitle.length > 0) {
      dispatch(getFilms(filmTitle));
    }
    setFilmTitle("");
  };

  return (
    <div className="searchForm-wrapper">
      <form onSubmit={submitSearch}>
        <div className="input-container">
          <label htmlFor="filmTitle">Search Film by Title:</label>
          <input
            id="filmTitle"
            type="text"
            placeholder="enter film title here"
            name="filmTitle"
            value={filmTitle}
            onChange={handleChanges}
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
