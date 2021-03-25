import { Modal, Button, Image } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Image from "react-bootstrap/Image";

import "bootstrap/dist/css/bootstrap.min.css";

export function FeatPokemon({ featPokemon, onHide }) {
  console.log(featPokemon, "here");

  if (featPokemon) {
    return (
      <Modal
        show
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {featPokemon.name.toUpperCase()}{" "}
            <b>XP: {featPokemon.base_experience}</b>
            <div onClick={onHide}>x</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={featPokemon.sprites.front_default} rounded />

          <h4>Abilities</h4>

          {featPokemon.abilities.map((oneAbility) => (
            <p> {oneAbility.ability.name}</p>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Add to Favorites</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return false;
}
