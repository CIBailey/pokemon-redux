const addFavoritePokemon = (chosenPokemon) => (dispatch) => {
  dispatch({ type: "ADD_FAVORITE_POKEMON", payload: chosenPokemon });
};
export default addFavoritePokemon;
