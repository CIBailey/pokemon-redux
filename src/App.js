import { useEffect } from "react";
import { PokeCard } from "./components/PokeCard";
import FeatPokemon from "./components/FeatPokemon";
import { CardColumns } from "react-bootstrap";
import { Button, Container } from "@material-ui/core/";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import updateFeatPokemon from "./store/actions/updateFeatPokemon";
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
    props.fetchPokemonNext("");
  }, []);

  let bodyText;

  if (props.pokemon) {
    bodyText = (
      <Container maxWidth="md">
        <FeatPokemon />
        <CardColumns style={{ columnCount: 5 }}>
          {props.pokemon.results.map((onePokemon, i) => (
            <div key={i}>
              <div onClick={(e) => triggerModal(onePokemon.name, e)}>
                <PokeCard pokemon={onePokemon} />
              </div>
            </div>
          ))}
        </CardColumns>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handlePage(props.pokemon.previous, e)}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handlePage(props.pokemon.next, e)}
          >
            Next
          </Button>
        </div>
      </Container>
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
    fetchPokemonNext: (url) => dispatch(fetchPokemonNext(url)),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(App);
