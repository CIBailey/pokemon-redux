import { connect } from "react-redux";
import useStyles from "../Styes";

function FavoriteCollection({ favPokemon }) {
  const classes = useStyles();
  let innerText;
  if (favPokemon) {
    innerText = favPokemon.map((onePokemon, i) => (
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
    favPokemon: state.favPokemon,
  };
};

export default connect(MapStateToProps)(FavoriteCollection);
