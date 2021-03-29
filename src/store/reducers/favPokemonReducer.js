const favPokemonReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_FAVORITE_POKEMON":
      return [...state, payload];
    default:
      return state;
  }
};
export default favPokemonReducer;
