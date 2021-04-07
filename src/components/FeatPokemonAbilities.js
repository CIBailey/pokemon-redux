import { connect } from "react-redux";
import useStyles from "../Styes";

function FeatPokemonAbilites({ featPokemon }) {
  const classes = useStyles();

  return (
    <div className={classes.details}>
      <div className={classes.imgWrapper}>
        <img src={featPokemon.sprites.front_default} />
      </div>
      <div className={classes.abilitesWrapper}>
        <div>Abilities:</div>
        {featPokemon.abilities.map((oneAbility, i) => (
          <div key={oneAbility + i}> + {oneAbility.ability.name}</div>
        ))}
      </div>
    </div>
  );
}

const MapStateToProps = (state) => {
  return {
    featPokemon: state.featPokemon,
  };
};

export default connect(MapStateToProps)(FeatPokemonAbilites);
