import { useEffect, useState } from "react";
import { PokeCard } from "./components/PokeCard";
import FavoriteCollection from "./components/FavoriteCollection";
import FeatPokemon from "./components/FeatPokemon";
import { CardColumns } from "react-bootstrap";
import { Button, Container, Drawer } from "@material-ui/core/";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import updateFeatPokemon from "./store/actions/updateFeatPokemon";
import fetchNextPokemons from "./store/actions/fetchNextPokemons";
import useStyles from "./Styes";

function App({
  fetchNextPokemons,
  updateFeatPokemon,
  pokemonList,
  favPokemon,
}) {
  const classes = useStyles();
  const [drawerToggle, setDrawerToggle] = useState(false);

  function handlePage(url, e) {
    e.preventDefault();
    if (url) {
      fetchNextPokemons(url);
    }
  }

  function triggerModal(pokemonName, event) {
    event.preventDefault();
    updateFeatPokemon(pokemonName);
  }

  useEffect(() => {
    fetchNextPokemons("");
  }, []);

  let bodyText;

  if (pokemonList) {
    console.log(pokemonList);
    bodyText = (
      <Container maxWidth="md">
        <FeatPokemon />
        <CardColumns className={classes.cardColumn}>
          {pokemonList.results.map((onePokemon, i) => (
            <div
              key={onePokemon.name + i}
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
            onClick={(e) => handlePage(pokemonList.previous, e)}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handlePage(pokemonList.next, e)}
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
          <FavoriteCollection />
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
    pokemonList: state.pokemon,
    favPokemon: state.favPokemon,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    updateFeatPokemon: (pokemonName) =>
      dispatch(updateFeatPokemon(pokemonName)),
    fetchNextPokemons: (url) => dispatch(fetchNextPokemons(url)),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(App);
