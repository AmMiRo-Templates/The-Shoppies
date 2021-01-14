import {
  NOMINATE_FILM,
  REMOVE_NOMINATION,
  SEARCHING_FILMS_FAILURE,
  SEARCHING_FILMS_START,
  SEARCHING_FILMS_SUCCESS,
  SEARCHING_FILMS_TITLE_ERROR,
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
      return {
        ...state,
        searchResults: [...action.payload],
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
      const filteredFilms = state.searchResults.filter(
        (film) => film.imdbID !== action.payload.imdbID
      );
      return {
        ...state,
        searchResults: [...filteredFilms],
        nominatedFilms: [...state.nominatedFilms, action.payload],
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

    //   default
    default:
      return state;
  }
};
