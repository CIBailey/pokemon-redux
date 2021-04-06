const removeFavoritePokemon = (chosenPokemon) => (dispatch) => {
  dispatch({ type: "REMOVE_FAVORITE_POKEMON", payload: chosenPokemon });
};
export default removeFavoritePokemon;
