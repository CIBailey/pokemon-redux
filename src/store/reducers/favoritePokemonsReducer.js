import { sortUniqueItems } from "../../helpers";

const favPokemonReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_FAVORITE_POKEMON":
      const updatedArray = [...state, payload];
      const cleanArray = sortUniqueItems(updatedArray);
      return cleanArray;
    case "REMOVE_FAVORITE_POKEMON":
      const index = state.indexOf(payload);
      const newArray = state;

      if (index > -1) {
        newArray.splice(index, 1);
      }

      return newArray;
    default:
      return state;
  }
};
export default favPokemonReducer;
