import { cleanUpFavoriteArray } from "../../helpers";

const favPokemonReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_FAVORITE_POKEMON":
      const updatedArray = [...state, payload];
      const cleanArray = cleanUpFavoriteArray(updatedArray);
      return cleanArray;
    case "REMOVE_FAVORITE_POKEMON":
      //check if already in state

      const index = state.indexOf(payload);
      const newArray = state;
      console.log(newArray);

      if (index > -1) {
        newArray.splice(index, 1);
      }
      console.log(payload);
      console.log(newArray);

      return newArray;
    default:
      return state;
  }
};
export default favPokemonReducer;
