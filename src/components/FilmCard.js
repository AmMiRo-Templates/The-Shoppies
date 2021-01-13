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
    <div>
      <img src={film.Poster} alt={`Poster for ${film.Title}`} />
      <h3>{film.Title}</h3>
      {film.Nominated === false ? (
        <button onClick={() => handleNomination(film)}>
          nominate this film
        </button>
      ) : (
        <button onClick={() => handleRemoveNomination(film.imdbID)}>
          remove from nominations
        </button>
      )}
    </div>
  );
}

export default FilmCard;
