import { useEffect } from "react";
import { Card } from "./components/Card";
import FeatPokemon from "./components/FeatPokemon";
import { CardColumns, Button } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import updateFeatPokemon from "./store/actions/updateFeatPokemon";
import fetchPokemon from "./store/actions/fetchPokemon";
import fetchPokemonNext from "./store/actions/fetchNextPokemon";

function App(props) {
  function handlePage(url, e) {
    e.preventDefault();
    if (url) {
      props.fetchPokemonNext(url);
    }
  }

  function triggerModal(pokemonName, event) {
    event.preventDefault();
    props.updateFeatPokemon(pokemonName);
  }

  useEffect(() => {
    props.fetchPokemon();
  }, []);

  let bodyText;

  if (props.pokemon) {
    bodyText = (
      <div>
        <FeatPokemon />
        <CardColumns style={{ columnCount: 5 }}>
          {props.pokemon.results.map((onePokemon, i) => (
            <div key={i} onClick={(e) => triggerModal(onePokemon.name, e)}>
              <Card pokemon={onePokemon} />
            </div>
          ))}
        </CardColumns>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={(e) => handlePage(props.pokemon.previous, e)}>
            Previous
          </Button>
          <Button onClick={(e) => handlePage(props.pokemon.next, e)}>
            Next
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="App" style={{ padding: "50px" }}>
      <header style={{ padding: "30px", fontSize: "35px" }}>
        Pokemon Cards
      </header>{" "}
      {bodyText}
    </div>
  );
}

const MapStateToProps = (state) => {
  return {
    featPokemon: state.featPokemon,
    pokemon: state.pokemon,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    updateFeatPokemon: (pokemonName) =>
      dispatch(updateFeatPokemon(pokemonName)),
    fetchPokemon: () => dispatch(fetchPokemon),
    fetchPokemonNext: (url) => dispatch(fetchPokemonNext(url)),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(App);
