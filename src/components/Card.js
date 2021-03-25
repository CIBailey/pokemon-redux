import CardBS from "react-bootstrap/Card";

export function Card({ pokemon }) {
  return (
    <CardBS style={{ cursor: "pointer" }}>
      <CardBS.Title style={{ padding: "20px", margin: "0" }}>
        {pokemon.name.toUpperCase()}
      </CardBS.Title>
    </CardBS>
  );
}
