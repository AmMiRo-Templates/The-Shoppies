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
    dispatch(getFilms(filmTitle));
    setFilmTitle("");
  };

  return (
    <div>
      <form onSubmit={submitSearch}>
        <label htmlFor="filmTitle">Film Title:</label>
        <input
          id="filmTitle"
          type="text"
          placeholder="enter film title here"
          name="filmTitle"
          value={filmTitle}
          onChange={handleChanges}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
