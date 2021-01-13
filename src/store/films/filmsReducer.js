import {
  NOMINATE_FILM,
  REMOVE_NOMINATION,
  SEARCHING_FILMS_FAILURE,
  SEARCHING_FILMS_START,
  SEARCHING_FILMS_SUCCESS,
} from "./filmsActions";

const initialState = {
  isSearching: false,
  searchResults: [],
  nominatedFilms: [],
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
      };
    case SEARCHING_FILMS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSearching: false,
      };

    //   nominate films
    case NOMINATE_FILM:
      const filteredFilms = state.searchResults.filter(
        (film) => film.imdbID != action.payload.imdbID
      );
      return {
        ...state,
        searchResults: [...filteredFilms],
        nominatedFilms: [...state.nominatedFilms, action.payload],
      };

    // remove nomination
    case REMOVE_NOMINATION:
      return {
        ...state,
        nominatedFilms: state.nominatedFilms.filter(
          (film) => film.imdbID !== action.payload
        ),
      };

    //   default
    default:
      return state;
  }
};
