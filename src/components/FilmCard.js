import React from "react";
import { useDispatch } from "react-redux";
import { nominateFilm } from "../store/films/filmsActions";

function FilmCard({ film }) {
  const dispatch = useDispatch();

  const handleNomination = (nominatedFilm) => {
    dispatch(nominateFilm(nominatedFilm));
  };

  return (
    <div>
      <img src={film.Poster} alt={`Poster for ${film.Title}`} />
      <h3>{film.Title}</h3>
      <button onClick={() => handleNomination(film)}>nominate this film</button>
    </div>
  );
}

export default FilmCard;
