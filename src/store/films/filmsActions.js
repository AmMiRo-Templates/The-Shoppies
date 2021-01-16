import axios from "axios";

// search films actions
export const SEARCHING_FILMS_START = "SEARCHING_FILMS_START";
export const SEARCHING_FILMS_SUCCESS = "SEARCHING_FILMS_SUCCESS";
export const SEARCHING_FILMS_FAILURE = "SEARCHING_FILMS_FAILURE";
export const SEARCHING_FILMS_TITLE_ERROR = "SEARCHING_FILMS_TITLE_ERROR";
export const getFilms = (title) => async (dispatch) => {
  dispatch({ type: SEARCHING_FILMS_START });

  try {
    const res = await axios.get(
      `https://www.omdbapi.com/?s=${title}&type=movie&page=5&apikey=7afcb2e0`
    );

    console.log("api response", res);

    if (res.data.Response === "True") {
      const formattedResponse = res.data.Search.map(
        (film) => (film = { ...film, Nominated: false })
      );

      dispatch({ type: SEARCHING_FILMS_SUCCESS, payload: formattedResponse });
    } else if (res.data.Response === "False") {
      dispatch({ type: SEARCHING_FILMS_TITLE_ERROR, payload: res.data.Error });
    }
  } catch (err) {
    console.log("error", err);
    dispatch({ type: SEARCHING_FILMS_FAILURE, payload: err });
  }
};

// nominate film
export const NOMINATE_FILM = "NOMINATE_FILM";
export const nominateFilm = (film) => (dispatch) => {
  film.Nominated = true;

  dispatch({ type: NOMINATE_FILM, payload: film });
};

// remove nomination
export const REMOVE_NOMINATION = "REMOVE_NOMINATION";
export const removeNomination = (filmId) => (dispatch) => {
  dispatch({ type: REMOVE_NOMINATION, payload: filmId });
};

// get nominated films from local storage
export const USE_LOCAL_STORAGE = "USE_LOCAL_STORAGE";
export const getLocalStorage = (key) => (dispatch) => {
  const item = JSON.parse(window.localStorage.getItem(key));
  dispatch({ type: USE_LOCAL_STORAGE, payload: item });
};
