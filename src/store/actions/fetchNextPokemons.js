const fetchPokemonNext = (url) => (dispatch) => {
  const requestInfo = url ? url : "https://pokeapi.co/api/v2/pokemon";
  fetch(requestInfo)
    .then((res) => res.json())
    .then((res) => dispatch({ type: "FETCH_OTHER_POKEMON", payload: res }));
};

export default fetchPokemonNext;
