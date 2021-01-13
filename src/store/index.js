import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { filmsReducer as films } from "./films/filmsReducer";

export const store = createStore(films, applyMiddleware(thunk));
