import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocalStorage } from "../store/films/filmsActions";
import FilmCard from "./FilmCard";

function NominatedFilms() {
  const dispatch = useDispatch();
  const nominatedFilms = useSelector((state) => state.nominatedFilms);

  useEffect(() => {
    dispatch(getLocalStorage("nominatedFilms"));
  }, []);

  return (
    <div className="nominatedFilms-wrapper">
      <p>Your Nominations</p>
      <div className="films-list">
        {nominatedFilms.map((film) => {
          return <FilmCard film={film} key={film.imdbID} />;
        })}
      </div>
    </div>
  );
}

export default NominatedFilms;
