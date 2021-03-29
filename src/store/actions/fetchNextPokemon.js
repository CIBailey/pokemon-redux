const fetchPokemonNext = (url) => (dispatch) => {
  fetch(url)
    .then((res) => res.json())
    .then((res) => dispatch({ type: "FETCH_OTHER_POKEMON", payload: res }));
};

export default fetchPokemonNext;
