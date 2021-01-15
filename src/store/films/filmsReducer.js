import {
  NOMINATE_FILM,
  REMOVE_NOMINATION,
  SEARCHING_FILMS_FAILURE,
  SEARCHING_FILMS_START,
  SEARCHING_FILMS_SUCCESS,
  SEARCHING_FILMS_TITLE_ERROR,
  USE_LOCAL_STORAGE,
} from "./filmsActions";

const initialState = {
  isSearching: false,
  searchResults: [],
  searchError: null,
  nominatedFilms: [],
  nominationsComplete: false,
  maxNominations: 5,
  error: null,
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    //   search films
    case SEARCHING_FILMS_START:
      return {
        ...state,
        isSearching: true,
      };
    case SEARCHING_FILMS_SUCCESS:
      const nomineeIds = new Set();
      state.nominatedFilms.forEach((film) => nomineeIds.add(film.imdbID));
      const filteredPayload = action.payload.filter(
        (film) => !nomineeIds.has(film.imdbID)
      );
      return {
        ...state,
        searchResults: [...filteredPayload],
        isSearching: false,
        searchError: null,
      };
    case SEARCHING_FILMS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSearching: false,
      };
    case SEARCHING_FILMS_TITLE_ERROR:
      return {
        ...state,
        searchResults: [],
        searchError: action.payload,
        isSearching: false,
      };

    //   nominate films
    case NOMINATE_FILM:
      const filteredSearchResults = state.searchResults.filter(
        (film) => film.imdbID !== action.payload.imdbID
      );

      const filteredNominations = state.nominatedFilms.filter(
        (film) => film.imdbID !== action.payload.imdbID
      );
      return {
        ...state,
        searchResults: [...filteredSearchResults],
        nominatedFilms: [...filteredNominations, action.payload],
        nominationsComplete:
          state.nominatedFilms.length + 1 === state.maxNominations
            ? true
            : false,
      };

    // remove nomination
    case REMOVE_NOMINATION:
      return {
        ...state,
        nominatedFilms: state.nominatedFilms.filter(
          (film) => film.imdbID !== action.payload
        ),
        nominationsComplete:
          state.nominatedFilms.length - 1 < state.maxNominations ? false : true,
      };

    // use local storage
    case USE_LOCAL_STORAGE:
      const storageValue = action.payload ? action.payload : [];
      return {
        ...state,
        nominatedFilms: storageValue,
      };

    //   default
    default:
      return state;
  }
};
