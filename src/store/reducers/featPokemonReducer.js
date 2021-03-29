const featPokemonReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "UPDATE_FEAT_POKEMON":
      return payload;
    default:
      return state;
  }
};
export default featPokemonReducer;
