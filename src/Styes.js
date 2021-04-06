import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  cardWrapper: {
    marginBottom: 10,
    cursor: "pointer",
  },
  headerApp: {
    padding: "30px",
    fontSize: "35px",
    padding: "50px",
    fontFamily: "'Chango', cursive",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "50px",
  },
  cardColumn: {
    columnCount: 5,
  },
  pokeCard: {
    padding: "20px",
  },
  modalWrapper: {
    width: "20%",
    padding: 20,
    width: "100%",
    maxWidth: 350,
    maxHeight: "100%",
    top: "50%",
    margin: "auto",
    transform: "translate(0, 80%)",
  },
  textWrapper: {
    display: "flex",
    fledDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    "& titleWrapper": {
      display: "flex",
      flexDirection: "column",
      float: "left",
      "& b": {
        fontSize: 15,
        color: "red",
      },
      "& pokemonName": {
        float: "left",
        fontFamily: "'Chango', cursive",
        margin: 0,
        fontSize: "25px",
      },
      "& favoriteButton": {
        float: "right",
      },
    },
  },

  details: {
    display: "flex",
    fledDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: "10px",
    "& imgWrapper": {
      float: "left",
    },
    "& abilitesWrapper": {
      paddingBottom: 5,
    },
  },
  drawerWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 25,
  },

  favPokemon: {
    padding: 5,
  },
});

export default useStyles;
