const favPokemonReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_FAVORITE_POKEMON":
      //check if already in state
      return [...state, payload];
    case "REMOVE_FAVORITE_POKEMON":
      //check if already in state
      return [...state, payload];
    default:
      return state;
  }
};
export default favPokemonReducer;
