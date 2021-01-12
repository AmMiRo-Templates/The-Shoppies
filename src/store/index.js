import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { filmsReducer as films } from "./films/filmsReducer";

const rootReducer = combineReducers(films);

export const store = createStore(rootReducer, applyMiddleware(thunk));
