import axios from "axios";

// search films actions
export const SEARCHING_FILMS_START = "SEARCHING_FILMS_START";
export const SEARCHING_FILMS_SUCCESS = "SEARCHING_FILMS_SUCCESS";
export const SEARCHING_FILMS_FAILURE = "SEARCHING_FILMS_FAILURE";
export const getFilms = (title) => async (dispatch) => {
  dispatch({ type: SEARCHING_FILMS_START });

  try {
    const res = await axios.get(
      `http://www.omdbapi.com/?s=${title}&type=movie&page=5&apikey=7afcb2e0`
    );
    console.log(res.data.Search);
    dispatch({ type: SEARCHING_FILMS_SUCCESS, payload: res.data.Search });
  } catch (err) {
    dispatch({ type: SEARCHING_FILMS_FAILURE, payload: err });
  }
};

// nominate film
export const NOMINATE_FILM = "NOMINATE_FILM";
export const nominateFilm = (film) => (dispatch) => {
  dispatch({ type: NOMINATE_FILM, payload: film });
};

// remove nomination
export const REMOVE_NOMINATION = "REMOVE_NOMINATION";
export const removeNomination = (filmId) => (dispatch) => {
  dispatch({ type: REMOVE_NOMINATION, payload: filmId });
};
