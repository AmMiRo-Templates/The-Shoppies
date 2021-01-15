import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nominateFilm, removeNomination } from "../store/films/filmsActions";

function FilmCard({ film }) {
  const dispatch = useDispatch();
  const nominatedFilms = useSelector((state) => state.nominatedFilms);

  const handleNomination = (nominatedFilm) => {
    nominatedFilm.Nominated = true;
    const filteredNominations = nominatedFilms.filter(
      (filmFromList) => filmFromList.imdbID !== nominatedFilm.imdbID
    );
    window.localStorage.setItem(
      "nominatedFilms",
      JSON.stringify([...filteredNominations, nominatedFilm])
    );
    dispatch(nominateFilm(nominatedFilm));
  };

  const handleRemoveNomination = (filmId) => {
    const filteredNominations = nominatedFilms.filter(
      (film) => film.imdbID !== filmId
    );
    window.localStorage.setItem(
      "nominatedFilms",
      JSON.stringify([...filteredNominations])
    );
    dispatch(removeNomination(filmId));
  };

  return (
    <div className="filmCard-wrapper">
      <img src={film.Poster} alt={`Poster for ${film.Title}`} />
      <h3>{`${film.Title} (${film.Year})`}</h3>
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
