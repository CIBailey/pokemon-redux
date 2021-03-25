import CardBS from "react-bootstrap/Card";

export function Card({ pokemon }) {
  return (
    <CardBS>
      <CardBS.Title>{pokemon.name}</CardBS.Title>
    </CardBS>
  );
}
