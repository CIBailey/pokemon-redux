import { connect } from "react-redux";
import { Fab, Modal, Paper } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import updateFeatPokemon from "../store/actions/updateFeatPokemon";
import addFavoritePokemon from "../store/actions/addFavoritePokemon";

function FeatPokemon({ updateFeatPokemon, featPokemon, addFavoritePokemon }) {
  function modalClose() {
    updateFeatPokemon(false);
  }

  function addToFav(event) {
    event.preventDefault();
    addFavoritePokemon(featPokemon.name);
  }

  if (featPokemon) {
    return (
      <Modal open={featPokemon ? true : false} onClose={modalClose}>
        <Paper>
          <div>
            <div>
              {" "}
              <h2> {featPokemon.name.toUpperCase()} </h2>
              <Fab onClick={(e) => addToFav(e)} aria-label="like">
                <FavoriteIcon />
              </Fab>
            </div>
            <p>
              <div>
                <img src={featPokemon.sprites.front_default} />
              </div>
              <b>XP: {featPokemon.base_experience}</b>
            </p>
          </div>
          <div>
            <h4>Abilities:</h4>
            {featPokemon.abilities.map((oneAbility, i) => (
              <p key={i}> + {oneAbility.ability.name}</p>
            ))}
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
