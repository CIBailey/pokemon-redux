import { Modal, Button, Image } from "react-bootstrap";

export function FeatPokemon({ featPokemon, onHide }) {
  if (featPokemon) {
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
              {featPokemon.name.toUpperCase()}{" "}
            </div>{" "}
            <b>XP: {featPokemon.base_experience}</b>
          </div>

          <Button variant="danger" onClick={onHide}>
            Close
          </Button>
        </Modal.Header>
        <Modal.Body style={{ alignSelf: "center" }}>
          <div style={{ float: "left", padding: "10px" }}>
            <Image src={featPokemon.sprites.front_default} rounded />
          </div>
          <div style={{ float: "right", padding: "10px" }}>
            <h4>Abilities:</h4>
            {featPokemon.abilities.map((oneAbility) => (
              <p> + {oneAbility.ability.name}</p>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Add to Favorites</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return false;
}
