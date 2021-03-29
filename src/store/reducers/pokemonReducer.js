const pokemonReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "FETCH_POKEMON":
      return payload;
    case "FETCH_OTHER_POKEMON":
      return payload;
    default:
      return state;
  }
};

export default pokemonReducer;
