import { useEffect, useState } from "react";
import { PokeCard } from "./components/PokeCard";
import FeatPokemon from "./components/FeatPokemon";
import { CardColumns } from "react-bootstrap";
import { Button, Container, Drawer } from "@material-ui/core/";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import updateFeatPokemon from "./store/actions/updateFeatPokemon";
import fetchPokemonNext from "./store/actions/fetchNextPokemon";
import useStyles from "./Styes";

function App({ fetchPokemonNext, updateFeatPokemon, pokemon }) {
  const classes = useStyles();
  const [drawerToggle, setDrawerToggle] = useState(false);

  function handlePage(url, e) {
    e.preventDefault();
    if (url) {
      fetchPokemonNext(url);
    }
  }

  function triggerModal(pokemonName, event) {
    event.preventDefault();
    updateFeatPokemon(pokemonName);
  }

  useEffect(() => {
    fetchPokemonNext("");
  }, []);

  let bodyText;

  if (pokemon) {
    bodyText = (
      <Container maxWidth="md">
        <FeatPokemon />
        <CardColumns className={classes.cardColumn}>
          {pokemon.results.map((onePokemon, i) => (
            <div
              key={i}
              className={classes.cardWrapper}
              onClick={(e) => triggerModal(onePokemon.name, e)}
            >
              <PokeCard pokemon={onePokemon} />
            </div>
          ))}
        </CardColumns>
        <div className={classes.buttonWrapper}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handlePage(pokemon.previous, e)}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handlePage(pokemon.next, e)}
          >
            Next
          </Button>
        </div>

        <Button onClick={(e) => setDrawerToggle(true)}>Favorites</Button>
        <Drawer
          anchor={"bottom"}
          open={drawerToggle}
          onClose={(e) => setDrawerToggle(false)}
        >
          Charmander Pikachu
        </Drawer>
      </Container>
    );
  }
  return (
    <div className="App">
      <header className={classes.headerApp}>Pokemon Cards</header> {bodyText}
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
