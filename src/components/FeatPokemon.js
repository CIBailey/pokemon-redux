import { connect } from "react-redux";
import { Modal, Paper, Divider } from "@material-ui/core";
import updateFeatPokemon from "../store/actions/updateFeatPokemon";
import FeatPokemonBookmarkButton from "./FeatPokemonBookmarkButton";
import FeatPokemonAbilities from "./FeatPokemonAbilities";
import useStyles from "../Styes";

function FeatPokemon({ updateFeatPokemon, featPokemon }) {
  const classes = useStyles();

  function modalClose() {
    updateFeatPokemon(false);
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
            <FeatPokemonBookmarkButton />
          </div>
          <Divider />
          <FeatPokemonAbilities />
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
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(FeatPokemon);
