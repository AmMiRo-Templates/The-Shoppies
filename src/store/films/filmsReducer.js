import {
  NOMINATE_FILM,
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
        searchResults: [action.payload],
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
      return {
        ...state,
        searchResults: state.searchResults.filter(
          (film) => film.id !== action.payload.id
        ),
        nominatedFilms: [...state.nominatedFilms, payload],
      };

    // remove nomination
    case REMOVE_NOMINATION:
      return {
        ...state,
        nominatedFilms: state.nominatedFilms.filter(
          (film) => film.id !== action.payload
        ),
      };
  }
};
