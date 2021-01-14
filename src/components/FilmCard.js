import React from "react";
import { useDispatch } from "react-redux";
import { nominateFilm, removeNomination } from "../store/films/filmsActions";

function FilmCard({ film }) {
  const dispatch = useDispatch();

  const handleNomination = (nominatedFilm) => {
    dispatch(nominateFilm(nominatedFilm));
  };

  const handleRemoveNomination = (filmId) => {
    dispatch(removeNomination(filmId));
  };

  return (
    <div className="filmCard-wrapper">
      <img src={film.Poster} alt={`Poster for ${film.Title}`} />
      <h3>{film.Title}</h3>
      {/* displays appropriate button if/not nominated */}
      {film.Nominated === false ? (
        <button onClick={() => handleNomination(film)}>+</button>
      ) : (
        <button onClick={() => handleRemoveNomination(film.imdbID)}>-</button>
      )}
    </div>
  );
}

export default FilmCard;
