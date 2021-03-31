import { Paper } from "@material-ui/core";

export function PokeCard({ pokemon }) {
  return (
    <Paper elevation={3} style={{ cursor: "pointer" }}>
      <div style={{ padding: "20px" }}>{pokemon.name.toUpperCase()}</div>
    </Paper>
  );
}
