import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  myButton: {
    color: "green",
    margin: {
      // jss-plugin-expand gives more readable syntax
      top: 5, // jss-plugin-default-unit makes this 5px
      right: 0,
      bottom: 0,
      left: "1rem",
    },
    "& span": {
      // jss-plugin-nested applies this to a child span
      fontWeight: "bold", // jss-plugin-camel-case turns this into 'font-weight'
    },
  },
  cardWrapper: {
    margin: "10px",
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
});

export default useStyles;
