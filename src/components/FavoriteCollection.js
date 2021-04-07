import { connect } from "react-redux";
import useStyles from "./FavoriteCollection.style";

function FavoriteCollection({ favoritePokemons }) {
  const classes = useStyles();
  let innerText;
  if (favoritePokemons) {
    innerText = favoritePokemons.map((onePokemon, i) => (
      <div className={classes.favPokemon} key={onePokemon.toUpperCase() + i}>
        {onePokemon.toUpperCase()}
      </div>
    ));
  } else {
    innerText = <div>Add Pokemon to your favorite collection!</div>;
  }
  return <div className={classes.drawerWrapper}>{innerText}</div>;
}

const MapStateToProps = (state) => {
  return {
    favoritePokemons: state.favPokemon,
  };
};

export default connect(MapStateToProps)(FavoriteCollection);
