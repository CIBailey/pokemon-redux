import { connect } from "react-redux";
import { Fab, Modal, Paper, Divider } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import updateFeatPokemon from "../store/actions/updateFeatPokemon";
import addFavoritePokemon from "../store/actions/addFavoritePokemon";
import useStyles from "../Styes";

function FeatPokemon({ updateFeatPokemon, featPokemon, addFavoritePokemon }) {
  const classes = useStyles();

  function modalClose() {
    updateFeatPokemon(false);
  }

  function addToFav(event) {
    event.preventDefault();
    addFavoritePokemon(featPokemon.name);
  }

  if (featPokemon) {
    return (
      <Modal
        className={classes.modal}
        open={featPokemon ? true : false}
        onClose={modalClose}
      >
        <Paper className={classes.modalWrapper}>
          <div className={classes.textWrapper}>
            <div className={classes.titleWrapper}>
              <h2 className={classes.pokemonName}>
                {featPokemon.name.toUpperCase()}
              </h2>
              <b className={classes.experience}>
                XP: {featPokemon.base_experience}
              </b>
            </div>
            <Fab
              className={classes.favoriteButton}
              size={"small"}
              onClick={(e) => addToFav(e)}
              aria-label="like"
            >
              <FavoriteIcon />
            </Fab>
          </div>
          <Divider />
          <div className={classes.details}>
            <div className={classes.imgWrapper}>
              <img src={featPokemon.sprites.front_default} />
            </div>
            <div className={classes.abilitesWrapper}>
              <div>Abilities:</div>
              {featPokemon.abilities.map((oneAbility, i) => (
                <div key={i}> + {oneAbility.ability.name}</div>
              ))}
            </div>
          </div>
        </Paper>
      </Modal>
    );
  }
  return false;
}

const MapStateToProps = (state) => {
  return {
    featPokemon: state.featPokemon,
    favPokemon: state.favPokemon,
  };
};
const MapDispatchToProps = (dispatch) => {
  return {
    updateFeatPokemon: (pokemonName) =>
      dispatch(updateFeatPokemon(pokemonName)),
    addFavoritePokemon: (pokemonName) =>
      dispatch(addFavoritePokemon(pokemonName)),
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(FeatPokemon);
