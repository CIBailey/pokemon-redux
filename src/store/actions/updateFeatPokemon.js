const updateFeatPokemon = (pokemonName) => (dispatch) => {
  if (pokemonName) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
      .then((res) => res.json())
      .then((res) => dispatch({ type: "UPDATE_FEAT_POKEMON", payload: res }));
  } else {
    dispatch({ type: "UPDATE_FEAT_POKEMON", payload: false });
  }
};
export default updateFeatPokemon;
