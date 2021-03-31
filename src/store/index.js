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
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

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

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const persistor = persistStore(store);

export { store, persistor };
