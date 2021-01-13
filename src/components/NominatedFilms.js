import React from "react";
import { useSelector } from "react-redux";
import FilmCard from "./FilmCard";

function NominatedFilms() {
  const nominatedFilms = useSelector((state) => state.nominatedFilms);

  return (
    <div>
      <p>Nominated Films</p>
      {nominatedFilms.map((film) => {
        return <FilmCard film={film} key={film.imdbID} />;
      })}
    </div>
  );
}

export default NominatedFilms;
