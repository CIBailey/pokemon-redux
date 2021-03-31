import { Paper } from "@material-ui/core";
import useStyles from "../Styes";

export function PokeCard({ pokemon }) {
  const classes = useStyles();

  return (
    <Paper elevation={3}>
      <div className={classes.pokeCard}>{pokemon.name.toUpperCase()}</div>
    </Paper>
  );
}
