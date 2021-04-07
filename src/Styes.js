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
});

export default useStyles;
