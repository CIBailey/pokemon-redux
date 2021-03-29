import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "@reduxjs/toolkit";
import featPokemonReducer from "./reducers/featPokemonReducer";
import favPokemonReducer from "./reducers/favPokemonReducer";
import pokemonReducer from "./reducers/pokemonReducer";
import thunk from "redux-thunk";
const middleware = [thunk];

const reducer = combineReducers({
  featPokemon: featPokemonReducer,
  pokemon: pokemonReducer,
  favPokemon: favPokemonReducer,
});

const initialState = {
  featPokemon: false,
  pokemon: false,
  favPokemon: [],
};

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
