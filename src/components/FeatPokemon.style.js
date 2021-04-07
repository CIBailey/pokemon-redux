import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
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

      "& pokemonName": {
        float: "left",
        fontFamily: "'Chango', cursive",
        margin: 0,
        fontSize: "25px",
      },
    },
  },
  experience: {
    fontSize: 15,
  },
});

export default useStyles;
