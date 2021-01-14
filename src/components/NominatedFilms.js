import React from "react";
import { useSelector } from "react-redux";
import FilmCard from "./FilmCard";

function NominatedFilms() {
  const nominatedFilms = useSelector((state) => state.nominatedFilms);

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
