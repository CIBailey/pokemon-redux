import { Modal, Button, Image } from "react-bootstrap";
import { connect } from "react-redux";
import updateFeatPokemon from "../store/actions/updateFeatPokemon";
import addFavoritePokemon from "../store/actions/addFavoritePokemon";

function FeatPokemon(props) {
  function onClose(event) {
    event.preventDefault();
    props.updateFeatPokemon(false);
  }

  function addToFav(event) {
    event.preventDefault();
    props.addFavoritePokemon(props.featPokemon.name);
  }

  if (props.featPokemon) {
    return (
      <Modal
        show
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <div style={{ float: "left" }}>
            <div style={{ fontSize: "25px" }}>
              {props.featPokemon.name.toUpperCase()}{" "}
            </div>{" "}
            <b>XP: {props.featPokemon.base_experience}</b>
          </div>

          <Button variant="danger" onClick={(e) => onClose(e)}>
            Close
          </Button>
        </Modal.Header>
        <Modal.Body style={{ alignSelf: "center" }}>
          <div style={{ float: "left", padding: "10px" }}>
            <Image src={props.featPokemon.sprites.front_default} rounded />
          </div>
          <div style={{ float: "right", padding: "10px" }}>
            <h4>Abilities:</h4>
            {props.featPokemon.abilities.map((oneAbility, i) => (
              <p key={i}> + {oneAbility.ability.name}</p>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={(e) => addToFav(e)}>Add to Favorites</Button>
        </Modal.Footer>
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
