import FavoriteIcon from "@material-ui/icons/Favorite";
import { Fab } from "@material-ui/core";
import addFavoritePokemon from "../store/actions/addFavoritePokemon";
import removeFavoritePokemon from "../store/actions/removeFavoritePokemon";
import { connect } from "react-redux";
import useStyles from "./FeatPokemonBookmarkButon.style";

function FeatPokemonBookmarkButton({
  featPokemon,
  addFavoritePokemon,
  favPokemonsList,
  removeFavoritePokemon,
}) {
  const classes = useStyles();
  const isFavoritePokemon = () =>
    favPokemonsList.indexOf(featPokemon.name) > -1;

  const toggleFavorite = (event) => {
    event.preventDefault();

    if (isFavoritePokemon()) {
      removeFavoritePokemon(featPokemon.name);
    } else {
      addFavoritePokemon(featPokemon.name);
    }
  };

  return (
    <Fab
      className={classes.favoriteButton}
      size={"small"}
      color={isFavoritePokemon() ? "secondary" : "default"}
      onClick={(e) => toggleFavorite(e)}
      aria-label="like"
    >
      <FavoriteIcon />
    </Fab>
  );
}

const MapStateToProps = (state) => {
  return {
    featPokemon: state.featPokemon,
    favPokemonsList: state.favPokemon,
  };
};
const MapDispatchToProps = (dispatch) => {
  return {
    addFavoritePokemon: (pokemonName) =>
      dispatch(addFavoritePokemon(pokemonName)),
    removeFavoritePokemon: (pokemonName) =>
      dispatch(removeFavoritePokemon(pokemonName)),
  };
};
export default connect(
  MapStateToProps,
  MapDispatchToProps
)(FeatPokemonBookmarkButton);
