import { sortUniqueItems } from "../../helpers";

const favPokemonReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_FAVORITE_POKEMON":
      return [...state, payload];
    case "REMOVE_FAVORITE_POKEMON":
      return [...state.filter((item) => item !== payload)];
    default:
      return state;
  }
};
export default favPokemonReducer;
