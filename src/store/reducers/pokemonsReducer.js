const pokemonsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "FETCH_OTHER_POKEMON":
      return payload;
    default:
      return state;
  }
};

export default pokemonsReducer;
