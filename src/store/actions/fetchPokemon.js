const fetchPokemon = (dispatch) => {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((res) => res.json())
    .then((res) => dispatch({ type: "FETCH_POKEMON", payload: res }));
};

export default fetchPokemon;
